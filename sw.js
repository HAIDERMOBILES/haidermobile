const CACHE_NAME = 'haider-mobiles-cache-v1';
const assetsToCache = [
  '/haidermobile/',
  '/haidermobile/index.html',
  'https://i.ibb.co/SSNjCH9/Haider-Mobile.png'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  console.log('Haider Mobiles Service Worker Activated');
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
