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

function headers(extra = {}) {
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
      `Cloudflare API geçersiz JSON döndürdü. HTTP ${response.status}: ${text}`
    );
  }

  if (!response.ok || data.success === false) {
    const details =
      data.errors?.map((e) => `${e.code ?? ""} ${e.message ?? ""}`).join(" | ") ||
      JSON.stringify(data);

    throw new Error(`Cloudflare API hatası (HTTP ${response.status}): ${details}`);
  }

  return data;
}

function getFiles(dir, baseDir = dir) {
  const result = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      result.push(...getFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      const relative = path.relative(baseDir, fullPath).replace(/\\/g, "/");
      result.push({
        fullPath,
        relativePath: `/${relative}`,
      });
    }
  }

  return result;
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

function buildHashMap(files, manifest) {
  const map = new Map();

  for (const file of files) {
    const entry = manifest[file.relativePath];
    map.set(entry.hash, file);
  }

  return map;
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  const types = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".mjs": "application/javascript",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".txt": "text/plain",
    ".xml": "application/xml",
    ".webmanifest": "application/manifest+json",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
  };

  return types[ext] || "application/octet-stream";
}

async function main() {
  console.log("🚀 KastamonuMobilya Cloudflare API deploy başlıyor...");

  const files = getFiles(ASSETS_DIR);

  if (files.length === 0) {
    throw new Error("dist klasöründe deploy edilecek dosya bulunamadı.");
  }

  console.log(`📦 ${files.length} dosya bulundu.`);

  const manifest = createManifest(files);
  const hashMap = buildHashMap(files, manifest);

  console.log("📝 Asset upload session oluşturuluyor...");

  const sessionResponse = await fetch(
    `${API_BASE}/workers/scripts/${WORKER_NAME}/assets-upload-session`,
    {
      method: "POST",
      headers: headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ manifest }),
    }
  );

  const session = await parseResponse(sessionResponse);

  const uploadJwt = session.result?.jwt;
  const buckets = session.result?.buckets ?? [];

  if (!uploadJwt) {
    throw new Error("Cloudflare upload JWT döndürmedi.");
  }

  console.log(`📤 ${buckets.length} upload bucketı hazırlanıyor...`);

  let completionJwt = uploadJwt;

  for (let i = 0; i < buckets.length; i++) {
    const bucket = buckets[i];

    const form = new FormData();

    for (const hash of bucket) {
      const file = hashMap.get(hash);

      if (!file) {
        throw new Error(`Hash için dosya bulunamadı: ${hash}`);
      }

      const buffer = fs.readFileSync(file.fullPath);
      const base64 = buffer.toString("base64");

      form.append(hash, base64);

      console.log(`  ↳ ${file.relativePath}`);
    }

    console.log(`📤 Bucket ${i + 1}/${buckets.length} yükleniyor...`);

    const uploadResponse = await fetch(
      `${API_BASE}/workers/assets/upload?base64=true`,
      {
        method: "POST",
        headers: headers(),
        body: form,
      }
    );

    const uploadResult = await parseResponse(uploadResponse);

    if (uploadResult.result?.jwt) {
      completionJwt = uploadResult.result.jwt;
    }
  }

  console.log("✅ Asset yükleme tamamlandı.");

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

  console.log("🚀 Worker version yükleniyor...");

  const deployResponse = await fetch(
    `${API_BASE}/workers/scripts/${WORKER_NAME}`,
    {
      method: "PUT",
      headers: headers(),
      body: form,
    }
  );

  await parseResponse(deployResponse);

  console.log("✅ Cloudflare deploy başarılı.");
  console.log(
    `🌍 Worker adı: ${WORKER_NAME}`
  );
}

main().catch((error) => {
  console.error("❌ Deploy başarısız:");
  console.error(error.message);
  process.exit(1);
});
