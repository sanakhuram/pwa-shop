let cart = [];

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    cartItems.appendChild(li);
  });
}

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 499,
    img: "./images/smartphone.jpg", 
  },
  {
    id: 2,
    name: "Laptop",
    price: 899,
    img: "./images/laptop.jpg", 
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    img: "./images/headphones.jpg", 
  },
  {
    id: 4,
    name: "Watch",
    price: 299,
    img: "./images/watch.jpg", 
  },
  {
    id: 5,
    name: "Camera",
    price: 749,
    img: "./images/camera.jpg", 
  },
  {
    id: 6,
    name: "Tablet",
    price: 399,
    img: "./images/tablet.jpg", 
  },
  {
    id: 7,
    name: "gaming",
    price: 299,
    img: "./images/game.jpg", 
  },
];
const productList = document.getElementById("product-list");
products.forEach((product) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <button>Add to Cart</button>
  `;
  const button = div.querySelector("button");
  button.addEventListener("click", () => {
    cart.push(product);
    updateCart();
    saveCartToIndexedDB();
  });
  productList.appendChild(div);
});

function saveCartToIndexedDB() {
  const dbRequest = indexedDB.open("pwa-shop", 1);
  dbRequest.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("cart", { keyPath: "id" });
  };
  dbRequest.onsuccess = function (event) {
    const db = event.target.result;
    const tx = db.transaction("cart", "readwrite");
    const store = tx.objectStore("cart");
    cart.forEach((item) => {
      store.put(item);
    });
  };
}

let deferredPrompt;
const installButton = document.getElementById("installButton");
installButton.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.style.display = "block";

  installButton.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  });
});