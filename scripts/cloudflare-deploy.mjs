import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const WORKER_NAME = "kastamonumobilya";
const ASSETS_DIR = path.resolve("dist");
const API_BASE = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}`;

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

async function parseJsonResponse(response) {
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
        ?.map((e) => `${e.code ?? ""} ${e.message ?? ""}`)
        .join(" | ") || JSON.stringify(data);

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

    // Cloudflare'ın resmi örneğindeki manifest hash formatı.
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

function createHashToFileMap(files, manifest) {
  const map = new Map();

  for (const file of files) {
    const entry = manifest[file.relativePath];
    map.set(entry.hash, file);
  }

  return map;
}

async function getOrCreateWorker() {
  console.log(`🔎 ${WORKER_NAME} Worker kontrol ediliyor...`);

  const listResponse = await fetch(`${API_BASE}/workers/workers`, {
    method: "GET",
    headers: authHeaders(),
  });

  const listData = await parseJsonResponse(listResponse);

  const existingWorker = listData.result?.find(
    (worker) => worker.name === WORKER_NAME
  );

  if (existingWorker) {
    console.log(`✅ Worker zaten mevcut: ${WORKER_NAME}`);
    return existingWorker;
  }

  console.log(`🆕 Worker oluşturuluyor: ${WORKER_NAME}`);

  const createResponse = await fetch(`${API_BASE}/workers/workers`, {
    method: "POST",
    headers: authHeaders({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      name: WORKER_NAME,
      subdomain: {
        enabled: true,
      },
      observability: {
        enabled: true,
      },
    }),
  });

  const createData = await parseJsonResponse(createResponse);

  console.log("✅ Worker oluşturuldu.");

  if (createData.result?.subdomain?.url) {
    console.log(`🌍 workers.dev: ${createData.result.subdomain.url}`);
  }

  return createData.result;
}

async function createAssetUploadSession(manifest) {
  console.log("📝 Asset upload session oluşturuluyor...");

  const response = await fetch(
    `${API_BASE}/workers/scripts/${WORKER_NAME}/assets-upload-session`,
    {
      method: "POST",
      headers: authHeaders({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ manifest }),
    }
  );

  const data = await parseJsonResponse(response);

  const jwt = data.result?.jwt;
  const buckets = data.result?.buckets ?? [];

  if (!jwt) {
    throw new Error("Cloudflare asset upload JWT döndürmedi.");
  }

  return { jwt, buckets };
}

async function uploadAssetBuckets(
  buckets,
  uploadJwt,
  hashToFileMap
) {
  let completionJwt = uploadJwt;

  for (let i = 0; i < buckets.length; i++) {
    const bucket = buckets[i];

    const payload = {};

    for (const hash of bucket) {
      const file = hashToFileMap.get(hash);

      if (!file) {
        throw new Error(`Manifest hash için dosya bulunamadı: ${hash}`);
      }

      const content = fs.readFileSync(file.fullPath);
      payload[hash] = content.toString("base64");

      console.log(`  ↳ ${file.relativePath}`);
    }

    console.log(
      `📤 Asset bucket ${i + 1}/${buckets.length} yükleniyor...`
    );

    const response = await fetch(
      `${API_BASE}/workers/assets/upload?base64=true`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${uploadJwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await parseJsonResponse(response);

    if (data.result?.jwt) {
      completionJwt = data.result.jwt;
    }
  }

  return completionJwt;
}

async function deployWorkerVersion(completionJwt) {
  const workerScript = `
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`.trim();

  const metadata = {
    main_module: `${WORKER_NAME}.mjs`,
    compatibility_date: "2026-08-26",
    bindings: [
      {
        name: "ASSETS",
        type: "assets",
      },
    ],
    assets: {
      jwt: completionJwt,
    },
  };

  const form = new FormData();

  form.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    })
  );

  form.append(
    `${WORKER_NAME}.mjs`,
    new Blob([workerScript], {
      type: "application/javascript+module",
    }),
    `${WORKER_NAME}.mjs`
  );

  console.log("🚀 Worker version deploy ediliyor...");

  const response = await fetch(
    `${API_BASE}/workers/scripts/${WORKER_NAME}`,
    {
      method: "PUT",
      headers: authHeaders(),
      body: form,
    }
  );

  const data = await parseJsonResponse(response);

  console.log("✅ Worker version başarıyla yayınlandı.");

  return data;
}

async function main() {
  console.log("🚀 KastamonuMobilya Cloudflare API deploy başlıyor...");

  const files = getFiles(ASSETS_DIR);

  if (files.length === 0) {
    throw new Error("dist klasöründe deploy edilecek dosya bulunamadı.");
  }

  console.log(`📦 ${files.length} dosya bulundu.`);

  const manifest = createManifest(files);
  const hashToFileMap = createHashToFileMap(files, manifest);

  await getOrCreateWorker();

  const { jwt: uploadJwt, buckets } =
    await createAssetUploadSession(manifest);

  let completionJwt = uploadJwt;

  if (buckets.length === 0) {
    console.log(
      "✅ Yeni asset yüklenmesine gerek yok; mevcut asset'ler yeniden kullanılacak."
    );
  } else {
    completionJwt = await uploadAssetBuckets(
      buckets,
      uploadJwt,
      hashToFileMap
    );

    console.log("✅ Asset yükleme tamamlandı.");
  }

  await deployWorkerVersion(completionJwt);

  console.log("");
  console.log("🎉 DEPLOY BAŞARILI");
  console.log(
    `🌍 https://${WORKER_NAME}.<workers-dev-subdomain>.workers.dev`
  );
}

main().catch((error) => {
  console.error("");
  console.error("❌ DEPLOY BAŞARISIZ");
  console.error(error.message);
  process.exit(1);
});
