// Service Worker f�r Offline-Funktionalit�t
const CACHE_NAME = 'werkbuch-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/app.js',
    '/js/auth.js',
    '/js/storage.js',
    '/js/workbook.js',
    '/js/exam.js',
    '/js/progress.js',
    '/manifest.json'
];

// Install Event - Cache erstellen
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache ge�ffnet');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch Event - Cache-first Strategie
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                
                // Kein Cache - fetch vom Netzwerk
                return fetch(event.request).then(response => {
                    // Pr�fen ob g�ltige Response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Response klonen f�r Cache
                    const responseToCache = response.clone();
                    
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    
                    return response;
                });
            })
    );
});

// Activate Event - Alte Caches l�schen
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});