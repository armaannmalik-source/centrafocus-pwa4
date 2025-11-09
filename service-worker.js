
const CACHE = 'centrafocus-v1';
const ASSETS = [
  '.',
  'index.html',
  'manifest.json',
  'service-worker.js',
  'assets/centrafocus.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
