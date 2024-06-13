//CycleTracker Example

/*const VERSION = "v0.2.9";
const CACHE_NAME = `quick-scales-tool-${VERSION}`;

const APP_STATIC_RESOURCES = [
    "./",
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
    "./scripts/main.js",
    "./sw.js",
    "./app.js",
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
        event.respondWith(caches.match(APP_STATIC_RESOURCES));
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
*/

/*

//MDN Service Worker Example

const addResourcesToCache = async (resources) => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(resources);
};

const putInCache = async (request, response) => {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
    // First try to get the resource from the cache
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
        return responseFromCache;
    }

    // Next try to use the preloaded response, if it's there
    // NOTE: Chrome throws errors regarding preloadResponse, see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1420515
    // https://github.com/mdn/dom-examples/issues/145
    // To avoid those errors, remove or comment out this block of preloadResponse
    // code along with enableNavigationPreload() and the "activate" listener.

    // const preloadResponse = await preloadResponsePromise;
    // if (preloadResponse) {
    //     console.info('using preload response', preloadResponse);
    //     putInCache(request, preloadResponse.clone());
    //     return preloadResponse;
    // }

    // Next try to get the resource from the network
    try {
        const responseFromNetwork = await fetch(request.clone());
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        putInCache(request, responseFromNetwork.clone());
        return responseFromNetwork;
    } catch (error) {
        const fallbackResponse = await caches.match(fallbackUrl);
        if (fallbackResponse) {
            return fallbackResponse;
        }
        // when even the fallback response is not available,
        // there is nothing we can do, but we must always
        // return a Response object
        return new Response('Network error happened', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
};

// const enableNavigationPreload = async () => {
//     if (self.registration.navigationPreload) {
//         // Enable navigation preloads!
//         await self.registration.navigationPreload.enable();
//     }
// };

// self.addEventListener('activate', (event) => {
//     event.waitUntil(enableNavigationPreload());
// });

self.addEventListener('install', (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/index-guitar-filter/styles/style.css",
            "/index-guitar-filter/images/hamburger-menu-512.png",
            "/index-guitar-filter/scripts/main.js",
            "/index-about/styles/style.css",
            "/index-about/images/hamburger-menu-512.png",
            "/index-about/images/scale-filter-ver2.PNG",
            "/index-about/images/logo-quick-scales.PNG",
            "/index-about/images/guitar-fret-ver2.PNG",
            "/index-about/images/keyboard-ver2.PNG",
            "/index-about/index.html",
            "/styles/style.css",
            "/images/hamburger-menu-512.png",
            "/images/logo-quick-scales.PNG",
            "/index-piano/styles/style.css",
            "/index-piano/images/hamburger-menu-512.png",
            "/index-piano/images/logo-quick-scales-piano.PNG",
            "/index-piano/index.html",
            "/index-piano/scripts/main.js",
            "/qst.json",
            "/scripts/main.js",
            "/sw.js",
            "/app.js",
        ])
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        cacheFirst({
            request: event.request,
            preloadResponsePromise: event.preloadResponse,
            fallbackUrl: '/index.html',
        })
    );
});

*/

//Another MND attempt

/*

const VERSION = "v0.2.9";
const cacheName = `quick-scales-tool-${VERSION}`;

const precachedResources = [
    "/",
    "/index.html",
    "/index-guitar-filter/styles/style.css",
    "/index-guitar-filter/images/hamburger-menu-512.png",
    "/index-guitar-filter/scripts/main.js",
    "/index-about/styles/style.css",
    "/index-about/images/hamburger-menu-512.png",
    "/index-about/images/scale-filter-ver2.PNG",
    "/index-about/images/logo-quick-scales.PNG",
    "/index-about/images/guitar-fret-ver2.PNG",
    "/index-about/images/keyboard-ver2.PNG",
    "/index-about/index.html",
    "/styles/style.css",
    "/images/hamburger-menu-512.png",
    "/images/logo-quick-scales.PNG",
    "/index-piano/styles/style.css",
    "/index-piano/images/hamburger-menu-512.png",
    "/index-piano/images/logo-quick-scales-piano.PNG",
    "/index-piano/index.html",
    "/index-piano/scripts/main.js",
    "/qst.json",
    "/scripts/main.js",
    "/sw.js",
    "/app.js",
];

async function precache() {
    const cache = await caches.open(cacheName);
    return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
    event.waitUntil(precache());
});

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            return cacheName;
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        return Response.error();
    }
}

self.addEventListener("fetch", (event) => {
    if (precachedResources.includes(url.pathname)) {
        event.respondWith(cacheFirst(event.request));
    }
});

*/

//js13kGames example

const VERSION = "v0.2.18";
const cacheName = `quick-scales-tool-${VERSION}`;

// Files to cache

const contentToCache = [
    ".",
    // "./index.html",
    "./index-guitar-filter/styles/style.css",
    "./index-guitar-filter/images/hamburger-menu-512.png",
    "./index-guitar-filter/scripts/main.js",
    "./index-guitar-filter/.",
    "./index-about/styles/style.css",
    "./index-about/images/hamburger-menu-512.png",
    "./index-about/images/scale-filter-ver2.PNG",
    "./index-about/images/logo-quick-scales.PNG",
    "./index-about/images/guitar-fret-ver2.PNG",
    "./index-about/images/keyboard-ver2.PNG",
    "./index-about/.",
    "./styles/style.css",
    "./images/hamburger-menu-512.png",
    "./images/logo-quick-scales.PNG",
    "./index-piano/styles/style.css",
    "./index-piano/images/hamburger-menu-512.png",
    "./index-piano/images/logo-quick-scales-piano.PNG",
    "./index-piano/.",
    "./index-piano/scripts/main.js",
    "./qst.json",
    "./scripts/main.js",
    "./sw.js",
    "./app.js",
];


// Installing Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    // Cache http and https only, skip unsupported chrome-extension:// and file://...
    if (!(
        e.request.url.startsWith('http:') || e.request.url.startsWith('https:')
    )) {
        return;
    }

    e.respondWith((async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) return r;
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});

