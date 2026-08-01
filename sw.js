const CACHE_NAME = "bosco-pwa-v27-mont-saint-michel-1";
const CORE_ASSETS = [
  "/bosco-pwa/",
  "/bosco-pwa/manifest.webmanifest",
  "/bosco-pwa/assets/index-CCACixLy.css",
  "/bosco-pwa/assets/page-B7dK8B51.css",
  "/bosco-pwa/assets/standalone-v27.js",
  "/bosco-pwa/assets/framework-CXnKph_e.js",
  "/bosco-pwa/assets/rolldown-runtime-S-ySWqyJ.js",
  "/bosco-pwa/assets/page-DP0zD7P0.js",
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
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

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
        .catch(() => caches.match("/bosco-pwa/"))
    );
    return;
  }

  if (url.pathname.startsWith("/bosco-pwa/assets/") || url.pathname.endsWith(".webmanifest")) {
    event.respondWith(
      caches.match(request).then((cached) => cached ?? fetch(request).then((response) => {
        if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
        return response;
      }))
    );
  }
});
