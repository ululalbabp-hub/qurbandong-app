/* Service worker Qurbandong: cangkang aplikasi langsung terbuka dari cache, pembaruan menyusul di belakang. */
const CACHE = 'qf-v61';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './config.js', './icon-192.png', './icon-512.png', './icon-512-maskable.png', './apple-touch-icon.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(ASSETS.map(function (u) {
        return fetch(u, { cache: 'no-cache' }).then(function (r) { if (r && r.ok) return c.put(u, r); });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;           // permintaan ke Apps Script tidak disentuh
  e.respondWith(
    caches.open(CACHE).then(function (c) {
      return c.match(r, { ignoreSearch: u.pathname.endsWith('/') || u.pathname.endsWith('/index.html') }).then(function (hit) {
        const net = fetch(r, { cache: 'no-cache' }).then(function (res) {
          if (res && res.ok && res.type === 'basic') c.put(r, res.clone());
          return res;
        }).catch(function () { return hit || c.match('./index.html'); });
        if (hit) { e.waitUntil(net); return hit; }
        return net;
      });
    })
  );
});
