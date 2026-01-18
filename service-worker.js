self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("math-game").then(cache => {
      return cache.addAll([
        "index.html",
        "game.html",
        "certificate.html",
        "script.js"
      ]);
    })
  );
});


