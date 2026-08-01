const CACHE_NAME = "bosco-pwa-v27-mont-saint-michel";
const CORE_ASSETS = [
  "/",
  "/manifest.webmanifest",
  "/assets/bosco/master.webp",
  "/assets/bosco/compositing/masks/occlusion-canonical-step9-v4.png",
  "/assets/bosco/compositing/objects/polders-cup-step9-v4.png",
  "/assets/bosco/compositing/poses/resting-step9-v4.png",
  "/assets/bosco/compositing/poses/listening-step9-v4.png",
  "/assets/bosco/compositing/poses/thinking-step9-v4.png",
  "/assets/bosco/compositing/poses/sea-step9-v4.png",
  "/assets/bosco/compositing/poses/barometer-step9-v4.png",
  "/assets/bosco/compositing/poses/chart-step9-v4.png",
  "/assets/bosco/compositing/hands-behind/resting-step9-v4.png",
  "/assets/bosco/compositing/hands-behind/listening-step9-v4.png",
  "/assets/bosco/compositing/hands-behind/thinking-step9-v4.png",
  "/assets/bosco/compositing/hands-behind/sea-step9-v4.png",
  "/assets/bosco/compositing/hands-behind/barometer-step9-v4.png",
  "/assets/bosco/compositing/hands-behind/chart-step9-v4.png",
  "/assets/bosco/compositing/fingers-front/resting-step9-v4.png",
  "/assets/bosco/compositing/fingers-front/listening-step9-v4.png",
  "/assets/bosco/compositing/fingers-front/thinking-step9-v4.png",
  "/assets/bosco/compositing/fingers-front/sea-step9-v4.png",
  "/assets/bosco/compositing/fingers-front/barometer-step9-v4.png",
  "/assets/bosco/compositing/fingers-front/chart-step9-v4.png",
  "/assets/bosco/decors/day/clear.webp"
];

async function precacheApplication(cache) {
  await Promise.allSettled(
    CORE_ASSETS.map((asset) => cache.add(new Request(asset, { cache: "reload" })))
  );

  const shellResponse = await fetch(new Request("/", { cache: "reload" }));
  if (!shellResponse.ok) return;
  await cache.put("/", shellResponse.clone());
  const html = await shellResponse.text();
  const appAssets = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
    .map((match) => new URL(match[1], self.location.origin))
    .filter((url) => url.origin === self.location.origin)
    .filter((url) => url.pathname.startsWith("/assets/") || url.pathname.startsWith("/_next/"))
    .map((url) => url.href);
  await Promise.allSettled(
    [...new Set(appAssets)].map((asset) => cache.add(new Request(asset, { cache: "reload" })))
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(precacheApplication));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
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
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put("/", copy));
          }
          return response;
        })
        .catch(() => caches.match("/"))
    );
    return;
  }

  if (
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/_next/") ||
    url.pathname.endsWith(".webmanifest")
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ??
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            }
            return response;
          })
      )
    );
  }
});
