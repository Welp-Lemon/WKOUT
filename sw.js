const WKOUT_CACHE = "wkout-pwa-v1";
const WKOUT_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/wkout-180.png",
  "./icons/wkout-192.png",
  "./icons/wkout-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(WKOUT_CACHE)
      .then(cache => cache.addAll(WKOUT_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== WKOUT_CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(WKOUT_CACHE).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
