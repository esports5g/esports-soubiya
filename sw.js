
const CACHE_NAME = 'soubiya-v1';
const ASSETS = [
  './','./index.html',
  './assets/logo.png','./assets/store-1.jpg','./assets/store-2.jpg','./assets/store-3.jpg','./assets/store-4.jpg'
];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE_NAME).then((c)=>c.addAll(ASSETS)));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request).then(res=>{
    const copy = res.clone(); caches.open(CACHE_NAME).then(c=>c.put(e.request, copy)); return res;
  }).catch(()=>caches.match('./index.html'))));
});
