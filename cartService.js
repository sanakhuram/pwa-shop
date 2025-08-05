// cartService.js

export let cart = [];

export function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    cartItems.appendChild(li);
  });
}

export function saveCartToIndexedDB() {
  const dbRequest = indexedDB.open('pwa-shop', 1);
  dbRequest.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore('cart', { keyPath: 'id' });
  };
  dbRequest.onsuccess = function (event) {
    const db = event.target.result;
    const tx = db.transaction('cart', 'readwrite');
    const store = tx.objectStore('cart');
    cart.forEach((item) => {
      store.put(item);
    });
  };
}
