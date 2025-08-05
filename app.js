import { products, displayProducts } from './productService.js';
import { cart, updateCart, saveCartToIndexedDB } from './cartService.js';
import { setupInstallPrompt } from './installService.js';

const installButton = document.getElementById('installButton');
console.log('Install button found:', installButton);

setupInstallPrompt(installButton);

const productList = document.getElementById('product-list');
displayProducts(productList, cart, () => {
  updateCart();
  saveCartToIndexedDB();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
