// seu-service-worker.js

self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: 'https://raw.githubusercontent.com/daniel070189/Afroditeparnaiba/main/logo192.png',
  };

  event.waitUntil(
    self.registration.showNotification('Afrodite Parnaiba', options)
  );
});
