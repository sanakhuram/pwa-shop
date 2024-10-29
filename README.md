
# 🛒 PWA Shop

## Overview

Welcome to **PWA Shop**! 🎉 This is a **Progressive Web Application (PWA)** that lets users browse products, add items to the cart 🛍️, and even install the app on their device 📱 for offline shopping! The app is modularized into separate JavaScript files for better maintainability and readability.

## Features

- **📴 Offline support**: Browse and interact with the app even when you're offline, thanks to caching with a service worker.
- **📲 Installable PWA**: Add the app to your home screen or desktop and use it like a native app.
- **🛍️ Dynamic product list**: Displays a list of products dynamically with the ability to add items to the cart.
- **🔄 Service worker**: Smart caching for faster load times and offline functionality.
- **🛒 Cart functionality**: Add products to the cart and view the cart contents.
- **🔔 Push notifications**: Optionally send notifications to the user (if included in your setup).

## File Structure

```plaintext
/ (root)
├── index.html         # Main entry point of the app
├── styles.css         # Styles for the app
├── app.js             # Main app logic (importing from modular files)
├── productService.js  # Handles product loading and display
├── cartService.js     # Handles cart functionality
├── installService.js  # Handles PWA installation prompt
├── sw.js              # Service worker script for caching and offline support
└── /images            # Folder containing images (e.g., logo and product images)
```

## 🚀 Getting Started

### 1. Clone the repository 🖥️

```bash
git clone https://github.com/your-repo/pwa-shop.git
cd pwa-shop
```

### 2. Run a local server 🏃‍♂️

To properly test PWA features (like service workers and caching), you'll need to run the app over HTTP. Here’s how to do it using `http-server`:

```bash
# Install http-server globally (if you don't have it)
npm install -g http-server

# Start the server
http-server -c-1
```

### 3. Access the app 🌐

Once the server is running, open your browser and navigate to `http://localhost:8080` (or whatever port `http-server` is using) to view and interact with the app.

### 4. Test PWA Features ⚡️

- Browse the products and add items to the cart.
- Try installing the app by clicking the "Install App" button (or using your browser’s install feature).
- Turn off your internet connection and see the app still working offline with cached content.

## 📁 Key Modules

### 1. **app.js**

This is the entry point that brings together the different modules. It imports the functionality from `productService.js`, `cartService.js`, and `installService.js`. It:
- Displays products on the page.
- Updates the cart with items.
- Manages the PWA install prompt.

### 2. **productService.js**

This module manages the product data and rendering the product list dynamically on the page. It also allows users to add items to the cart.

```javascript
// Example of how products are managed
export const products = [
  { id: 1, name: "Smartphone", price: 499, img: "./images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 899, img: "./images/laptop.jpg" },
  // More products...
];
```

### 3. **cartService.js**

This module handles the cart functionality:
- Adds products to the cart.
- Updates the cart display.
- Saves the cart to `IndexedDB` to ensure that data persists across sessions.

### 4. **installService.js**

This module handles the PWA install prompt:
- Manages the `beforeinstallprompt` event.
- Displays the install button and listens for user interaction to trigger the PWA install process.

### 5. **sw.js**

This is the **service worker** script responsible for caching key app resources for offline use. It:
- Caches important files like HTML, CSS, JavaScript, and images.
- Serves resources from the cache when offline or when the network is slow.

```javascript
const CACHE_NAME = "pwa-shop-cache-v2";
const urlsToCache = [
  "/index.html",
  "/styles.css",
  "/app.js",
  "/images/logo.png",
];
```

## 🧙‍♂️ How It Works

1. **Service Worker**: 
   - The service worker (`sw.js`) caches the app’s assets, enabling offline functionality. It intercepts network requests and serves resources from the cache when they are available, falling back to the network if not.
   
2. **Modular JavaScript**: 
   - The app is modularized into smaller JavaScript files for products, cart, and installation functionality, which are imported and used in `app.js`.
   
3. **PWA Installation**:
   - Users can install the app on their device using the "Install App" button, and the app will behave like a native mobile or desktop app.

4. **IndexedDB for Cart**:
   - The cart is persisted using `IndexedDB`, meaning cart data remains saved even after the user closes and reopens the app.

## 🛠️ How to Update the Cache

1. Update the cache name in the `sw.js` file (e.g., from `v2` to `v3`).
2. Update the `urlsToCache` array, if necessary.
3. Deploy the new version! The service worker will automatically clean up old caches and replace them with the new one.

## 📜 License

This project is licensed under the MIT License. Feel free to fork, modify, and distribute! 🚀

---
