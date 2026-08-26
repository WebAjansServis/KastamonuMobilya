import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const WORKER_NAME = "kastamonumobilya";
const SCRIPT_FILENAME = `${WORKER_NAME}.mjs`;
const ASSETS_DIR = path.resolve("dist");

const API_BASE =
  `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}`;

if (!API_TOKEN) {
  throw new Error("CLOUDFLARE_API_TOKEN eksik.");
}

if (!ACCOUNT_ID) {
  throw new Error("CLOUDFLARE_ACCOUNT_ID eksik.");
}

if (!fs.existsSync(ASSETS_DIR)) {
  throw new Error(`dist klasörü bulunamadı: ${ASSETS_DIR}`);
}

function authHeaders(extra = {}) {
  return {
    Authorization: `Bearer ${API_TOKEN}`,
    ...extra,
  };
}

async function parseResponse(response) {
  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(
      `Cloudflare geçersiz JSON döndürdü. HTTP ${response.status}: ${text}`
    );
  }

  if (!response.ok || data.success === false) {
    const details =
      data.errors
        ?.map((error) => `${error.code ?? ""} ${error.message ?? ""}`)
        .join(" | ") ||
      JSON.stringify(data);

    throw new Error(
      `Cloudflare API hatası (HTTP ${response.status}): ${details}`
    );
  }

  return data;
}

function getFiles(dir, baseDir = dir) {
  const files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      const relativePath = path
        .relative(baseDir, fullPath)
        .replace(/\\/g, "/");

      files.push({
        fullPath,
        relativePath: `/${relativePath}`,
      });
    }
  }

  return files;
}

function createManifest(files) {
  const manifest = {};

  for (const file of files) {
    const content = fs.readFileSync(file.fullPath);
    const extension = path.extname(file.relativePath).replace(".", "");

    const hash = crypto
      .createHash("sha256")
      .update(content.toString("base64") + extension)
      .digest("hex")
      .slice(0, 32);

    manifest[file.relativePath] = {
      hash,
      size: content.length,
    };
  }

  return manifest;
}

function getHashToFileMap(files, manifest) {
  const map = new Map();

  for (const file of files) {
    const hash = manifest[file.relativePath].hash;
    map.set(hash, file);
  }

  return map;
}

async function createAssetUploadSession(manifest) {
  console.log("📝 Asset manifest gönderiliyor...");

  const response = await fetch(
    `${API_BASE}/workers/scripts/${WORKER_NAME}/assets-upload-session`,
    {
      method: "POST",
      headers: authHeaders({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        manifest,
      }),
    }
  );

  const data = await parseResponse(response);

  const jwt = data.result?.jwt;
  const buckets = data.result?.buckets;

  if (!jwt || !buckets) {
    throw new Error(
      "Cloudflare asset upload session JWT veya buckets döndürmedi."
    );
  }

  console.log(`✅ Upload session hazır. ${buckets.length} bucket var.`);

  return {
    jwt,
    buckets,
  };
}

async function uploadAssets(buckets, uploadJwt, hashToFileMap) {
  let completionJwt = uploadJwt;

  if (buckets.length === 0) {
    console.log("✅ Yeni asset yüklemesi gerekmiyor.");
    return completionJwt;
  }

  for (let index = 0; index < buckets.length; index++) {
    const bucket = buckets[index];

    const formData = new FormData();

    for (const hash of bucket) {
      const file = hashToFileMap.get(hash);

      if (!file) {
        throw new Error(`Hash için dosya bulunamadı: ${hash}`);
      }

      const content = fs.readFileSync(file.fullPath);
      const base64Content = content.toString("base64");

      formData.append(hash, base64Content);

      console.log(`  ↳ ${file.relativePath}`);
    }

    console.log(
      `📤 Asset bucket ${index + 1}/${buckets.length} yükleniyor...`
    );

    const response = await fetch(
      `${API_BASE}/workers/assets/upload?base64=true`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${uploadJwt}`,
        },
        body: formData,
      }
    );

    const data = await parseResponse(response);

    if (data.result?.jwt) {
      completionJwt = data.result.jwt;
    }
  }

  console.log("✅ Tüm asset'ler yüklendi.");

  return completionJwt;
}

async function deployWorker(completionJwt) {
  console.log("🚀 Worker yayınlanıyor...");

  const workerCode = `
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`.trim();

  const metadata = {
    main_module: SCRIPT_FILENAME,
    compatibility_date: "2026-08-26",
    bindings: [
      {
        type: "assets",
        name: "ASSETS",
      },
    ],
    assets: {
      jwt: completionJwt,
    },
  };

  const formData = new FormData();

  formData.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    })
  );

  formData.append(
    SCRIPT_FILENAME,
    new Blob([workerCode], {
      type: "application/javascript+module",
    }),
    SCRIPT_FILENAME
  );

  const response = await fetch(
    `${API_BASE}/workers/scripts/${WORKER_NAME}`,
    {
      method: "PUT",
      headers: authHeaders(),
      body: formData,
    }
  );

  const data = await parseResponse(response);

  console.log("✅ Worker sürümü başarıyla yüklendi.");

  return data;
}

async function enableWorkersDev() {
  console.log("🌍 workers.dev subdomain kontrol ediliyor...");

  const response = await fetch(
    `${API_BASE}/workers/scripts/${WORKER_NAME}/subdomain`,
    {
      method: "POST",
      headers: authHeaders({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        enabled: true,
        previews_enabled: true,
      }),
    }
  );

  await parseResponse(response);

  console.log("✅ workers.dev subdomain aktif.");
}

async function main() {
  console.log("");
  console.log("🚀 KastamonuMobilya Cloudflare API deploy başlıyor...");
  console.log("");

  const files = getFiles(ASSETS_DIR);

  if (files.length === 0) {
    throw new Error("dist klasöründe deploy edilecek dosya bulunamadı.");
  }

  console.log(`📦 ${files.length} dosya bulundu.`);

  const manifest = createManifest(files);
  const hashToFileMap = getHashToFileMap(files, manifest);

  const {
    jwt: uploadJwt,
    buckets,
  } = await createAssetUploadSession(manifest);

  const completionJwt = await uploadAssets(
    buckets,
    uploadJwt,
    hashToFileMap
  );

  await deployWorker(completionJwt);

  await enableWorkersDev();

  console.log("");
  console.log("🎉 DEPLOY BAŞARILI");
  console.log(`🌍 Worker: ${WORKER_NAME}`);
  console.log("");
}

main().catch((error) => {
  console.error("");
  console.error("❌ DEPLOY BAŞARISIZ");
  console.error(error.message);
  console.error("");
  process.exit(1);
});
