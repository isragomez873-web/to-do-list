const cacheName = 'to-do-list-cache-v1';
const archivos = [
  '/',
  'index.html',
  'styles.css',
  'script.js',
  'manifest.json',
  'img/hadestdl.png',
  'img/hadestdl512.png'
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