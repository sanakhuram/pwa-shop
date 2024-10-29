import { products, displayProducts } from "./productService.js";
import { cart, updateCart, saveCartToIndexedDB } from "./cartService.js";
import { setupInstallPrompt } from "./installService.js";

// Display the products on the page
const productList = document.getElementById("product-list");
displayProducts(productList, cart, () => {
  updateCart();
  saveCartToIndexedDB();
});

// Setup PWA install prompt
const installButton = document.getElementById("installButton");
installButton.style.display = "none";
setupInstallPrompt(installButton);
