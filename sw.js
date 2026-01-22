// Service Worker Mínimo Funcional
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Deixa as requisições passarem normalmente
  event.respondWith(fetch(event.request));
});
