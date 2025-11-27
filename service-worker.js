

const cacheName = "v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "img_1.jpeg",
"img_2.jpeg",
"img_3.jpeg",
"img_4.jpeg"
];

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => res || fetch(evt.request))
  );
});