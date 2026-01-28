self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Ye offline support ke liye hota hai, filhal isay empty chhor dete hain
});