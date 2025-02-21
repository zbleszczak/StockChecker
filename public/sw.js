self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('stock-dashboard-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/register.html',
          '/dashboard.html',
          '/scripts/validation.js',
          '/manifest.json',
          '/icon-192x192.png',
          '/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });