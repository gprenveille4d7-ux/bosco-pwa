const CACHE_NAME = "bosco-pwa-v28-gemini-3.2";
const CORE_ASSETS = [
  "/bosco-pwa/",
  "/bosco-pwa/manifest.webmanifest",
  "/bosco-pwa/assets/index-CCACixLy.css",
  "/bosco-pwa/assets/page-B7dK8B51.css",
  "/bosco-pwa/assets/standalone-v27.js",
  "/bosco-pwa/assets/standalone-v28.js",
  "/bosco-pwa/assets/standalone-v28-8.js",
  "/bosco-pwa/assets/standalone-v28-9.js",
  "/bosco-pwa/assets/standalone-v28-9-1.js",
  "/bosco-pwa/assets/standalone-v28-9-2.js",
  "/bosco-pwa/assets/standalone-v28-9-3.js",
  "/bosco-pwa/assets/standalone-v28-9-4.js",
  "/bosco-pwa/assets/framework-CXnKph_e.js",
  "/bosco-pwa/assets/rolldown-runtime-S-ySWqyJ.js",
  "/bosco-pwa/assets/page-DP0zD7P0.js",
  "/bosco-pwa/assets/page-GeminiSequence-v29.js",
  "/bosco-pwa/assets/maritime-route-v28.js",
  "/bosco-pwa/data/index.js",
  "/bosco-pwa/data/dialogues-bosco.js",
  "/bosco-pwa/data/histoires-bosco/mont-saint-michel.js",
  "/bosco-pwa/data/histoires-bosco/jullouville.js",
  "/bosco-pwa/data/carnet-emile/mont-saint-michel.js",
  "/bosco-pwa/data/carnet-emile/granville.js",
  "/bosco-pwa/data/carnet-emile/cherbourg.js",
  "/bosco-pwa/data/carnet-emile/chausey.js",
  "/bosco-pwa/data/carnet-emile/brehal.js",
  "/bosco-pwa/data/carnet-emile/hauteville.js",
  "/bosco-pwa/data/carnet-emile/regneville.js",






  
  "/bosco-pwa/data/coin-du-marin/jullouville.js",
  "/bosco-pwa/data/carnet-emile/herel.js",
  "/bosco-pwa/assets/stories-v28.js",
  "/bosco-pwa/assets/stories-v28.css",
  "/bosco-pwa/assets/bosco/stories/tourbillon-lamp-v28.mp4",
  "/bosco-pwa/assets/bosco/stories/tourbillon-lamp-v28-poster.png",
  "/bosco-pwa/assets/bosco/master.webp",
  "/bosco-pwa/assets/bosco/compositing/masks/occlusion-canonical-step9-v4.png",
  "/bosco-pwa/assets/bosco/compositing/objects/polders-cup-step9-v4.png",
  "/bosco-pwa/assets/bosco/compositing/poses/resting-step9-v4.png",
  "/bosco-pwa/assets/bosco/compositing/poses/listening-step9-v4.png",
  "/bosco-pwa/assets/bosco/compositing/poses/thinking-step9-v4.png",
  "/bosco-pwa/assets/bosco/compositing/poses/sea-step9-v4.png",
  "/bosco-pwa/assets/bosco/compositing/poses/barometer-step9-v4.png",
  "/bosco-pwa/assets/bosco/compositing/poses/chart-step9-v4.png",
  "/bosco-pwa/assets/bosco/decors/day/clear.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        CORE_ASSETS.map((asset) => cache.add(new Request(asset, { cache: "reload" })))
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((name) => name.startsWith("bosco-pwa-") && name !== CACHE_NAME).map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

async function cachedRangeResponse(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request.url, { ignoreSearch: true });
  if (!cached) return null;
  const range = request.headers.get("range");
  if (!range) return cached;
  const match = /^bytes=(\d+)-(\d*)$/i.exec(range);
  if (!match) return cached;
  const bytes = await cached.arrayBuffer();
  const start = Number(match[1]);
  const requestedEnd = match[2] ? Number(match[2]) : bytes.byteLength - 1;
  const end = Math.min(requestedEnd, bytes.byteLength - 1);
  if (start > end || start >= bytes.byteLength) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${bytes.byteLength}` },
    });
  }
  return new Response(bytes.slice(start, end + 1), {
    status: 206,
    headers: {
      "Accept-Ranges": "bytes",
      "Content-Length": String(end - start + 1),
      "Content-Range": `bytes ${start}-${end}/${bytes.byteLength}`,
      "Content-Type": cached.headers.get("Content-Type") || "video/mp4",
    },
  });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put("/bosco-pwa/", response.clone()));
          return response;
        })
        .catch(() => caches.open(CACHE_NAME).then((cache) => cache.match("/bosco-pwa/")))
    );
    return;
  }

  if (url.pathname.endsWith("tourbillon-lamp-v28.mp4")) {
    event.respondWith(
      cachedRangeResponse(request).then((cached) => cached || fetch(request).then((response) => {
        if (response.ok && response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => cache.put(request.url, response.clone()));
        }
        return response;
      }))
    );
    return;
  }

  if (url.pathname.startsWith("/bosco-pwa/assets/") || url.pathname.startsWith("/bosco-pwa/data/") || url.pathname.endsWith(".webmanifest")) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => cache.match(request, { ignoreSearch: true })).then((cached) => cached ?? fetch(request).then((response) => {
        if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
        return response;
      }))
    );
  }
});
