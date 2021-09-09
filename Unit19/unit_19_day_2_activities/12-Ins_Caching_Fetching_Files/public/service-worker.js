// The FILES_TO_CACHE variable keeps track of each request to store in the
// cache.

// 🔑 This is an array of files only, attempting to include entire folders won't
// work.
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/loadPosts.js",
  "/assets/images/Angular-icon.png",
  "/assets/images/React-icon.png",
  "/assets/images/Vue.js-icon.png",
  "/manifest.webmanifest",
  "/favicon.ico",
  "/assets/images/icons/icon-72x72.png",
  "/assets/images/icons/icon-96x96.png",
  "/assets/images/icons/icon-128x128.png",
  "/assets/images/icons/icon-144x144.png",
  "/assets/images/icons/icon-152x152.png",
  "/assets/images/icons/icon-192x192.png",
  "/assets/images/icons/icon-384x384.png",
  "/assets/images/icons/icon-512x512.png",
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// install
self.addEventListener("install", function (evt) {
  // open the  cache and call addAll, passing in FILES_TO_CACHE to have the
  // service worker request these items and save them in the cache
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Your files were pre-cached successfully! ✅");
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", function (evt) {
  // 📝 The activate event happens when the service worker takes control. This is
  // the time to remove outdated cache data.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data 🧹", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// fetch
self.addEventListener("fetch", function (evt) {
  if (evt.request.method !== "GET") return;
  // cache any GET requests for data from the api to keep this data current
  // since it changes frequently.
  console.log(
    `Service working is handling request for '${evt.request.url}'. 📝`
  );

  // Checks for requests to any url containing "/api/"
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches
        .open(DATA_CACHE_NAME)
        .then((cache) => {
          return fetch(evt.request)
            .then((response) => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                console.log("Saving response in the data cache. 🔑");
                cache.put(evt.request.url, response.clone());
              }

              return response;
            })
            .catch((err) => {
              // Network request failed, try to get it from the cache.
              console.log(
                "Unable to reach the server. Getting data from the cache instead. 📝"
              );
              return cache.match(evt.request);
            });
        })
        .catch((err) => console.log(err))
    );

    return;
  }

  // if the request is not for the API, serve static assets using
  // "offline-first" approach. see
  // https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network
  evt.respondWith(
    caches.match(evt.request).then(function (response) {
      return response || fetch(evt.request);
    })
  );
});
