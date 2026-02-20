// Define cache name and files to cache
const cacheName = 'pwa-app-cache-v1';
const filesToCache = ['./'];

// Function to install service worker
function installServiceWorker(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[Service Worker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
}

// Function to activate service worker
function activateServiceWorker(e) {
    console.log('[Service Worker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('[Service Worker] Removing old cache:', key);
                    return caches.delete(key);
                }
            }));
        })
    );
}

// Function to handle fetch events
function fetchServiceWorker(e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
}

// Add event listeners for service worker
self.addEventListener('install', installServiceWorker);
self.addEventListener('activate', activateServiceWorker);
self.addEventListener('fetch', fetchServiceWorker);
