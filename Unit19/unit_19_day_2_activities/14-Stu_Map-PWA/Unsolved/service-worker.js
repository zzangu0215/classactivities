const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/assets/images/logo16.png",
  "/assets/images/logo48.png",
  "/assets/images/logo128.png",
  "/assets/images/logo512.png",
  "/assets/images/brandenburg.jpg",
  "/assets/images/map.jpg",
  "/assets/images/reichstag.jpg",
  "/assets/css/style.css",
];

// TODO: add listener and handler to cache static assets
self.addEventListener("install", function (evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );

  self.skipWaiting();
});

self.addEventListener("activate", function (evt) {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key != DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// TODO: add listener and handler to retrieve static assets from the Cache Storage in the browser
self.addEventListener("fetch", function (evt) {
  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        return response || fetch(evt.request);
      });
    })
  );
});
