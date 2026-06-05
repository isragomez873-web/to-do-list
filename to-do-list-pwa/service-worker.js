const cacheName = 'to-do-list-cache-v1';
const archivos = [
  '/to-do-list/to-do-list-pwa/',
  '/to-do-list/to-do-list-pwa/index.html',
  '/to-do-list/to-do-list-pwa/styles.css',
  '/to-do-list/to-do-list-pwa/script.js',
  '/to-do-list/to-do-list-pwa/manifest.json',
  '/to-do-list/to-do-list-pwa/img/hadestdl.png',
  '/to-do-list/to-do-list-pwa/img/hadestdl512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(archivos);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});