importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
);

if (workbox) {
  addEventListener("message", event => {
    if (event.data && event.data.type === "SKIP_WAITING") {
      skipWaiting();
    }
  });

  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
