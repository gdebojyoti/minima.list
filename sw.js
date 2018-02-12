var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    "index.html",
    "public/js/bundle.js"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("opened!");
                return cache.addAll(urlsToCache);
            })
    );
    console.log("installed");
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(e.request);
            })
    );
    console.log("fetched");
});
