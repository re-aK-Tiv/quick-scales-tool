const VERSION = "v0.2.1";
const CACHE_NAME = `quick-scales-tool-${VERSION}`;

const APP_STATIC_RESOURCES = [
    "/",
    "./index.html",
    "./index-guitar-filter/styles/style.css",
    "./index-guitar-filter/images/hamburger-menu-512.png",
    "./index-guitar-filter/scripts/main.js",
    "./index-about/styles/style.css",
    "./index-about/images/hamburger-menu-512.png",
    "./index-about/images/scale-filter-ver2.PNG",
    "./index-about/images/logo-quick-scales.PNG",
    "./index-about/images/guitar-fret-ver2.PNG",
    "./index-about/images/keyboard-ver2.PNG",
    "./index-about/index.html",
    "./styles/style.css",
    "./images/hamburger-menu-512.png",
    "./images/logo-quick-scales.PNG",
    "./index-piano/styles/style.css",
    "./index-piano/images/hamburger-menu-512.png",
    "./index-piano/images/logo-quick-scales-piano.PNG",
    "./index-piano/index.html",
    "./index-piano/scripts/main.js",
    "./qst.json",
    "./index.html",
    "./scripts/main.js",
    "./scripts/sw.js",
    "./sw.js",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            cache.addAll(APP_STATIC_RESOURCES);
        })(),
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            const names = await caches.keys();
            await Promise.all(
                names.map((name) => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                }),
            );
            await clients.claim();
        })(),
    );
});

self.addEventListener("fetch", (event) => {
    // when seeking an HTML page
    if (event.request.mode === "navigate") {
        // Return to the index.html page
        event.respondWith(caches.match("/"));
        return;
    }

    // For every other request type
    event.respondWith(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match(event.request.url);
            if (cachedResponse) {
                // Return the cached response if it's available.
                return cachedResponse;
            }
            // Respond with a HTTP 404 response status.
            return new Response(null, { status: 404 });
        })(),
    );
});
