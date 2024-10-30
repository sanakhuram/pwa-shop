import { products, displayProducts } from "./productService.js";
import { cart, updateCart, saveCartToIndexedDB } from "./cartService.js";
import { setupInstallPrompt } from "./installService.js";

const installButton = document.getElementById("installButton");
setupInstallPrompt(installButton);

const productList = document.getElementById("product-list");
displayProducts(productList, cart, () => {
  updateCart();
  saveCartToIndexedDB();
});


