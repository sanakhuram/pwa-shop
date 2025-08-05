if ('Notification' in window && 'serviceWorker' in navigator) {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted');
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification('Welcome to PWA Shop!', {
          body: 'You will receive notifications from us.',
          icon: '/images/logo.png',
        });
      });
    }
  });
}
