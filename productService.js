// productService.js
export const products = [
  { id: 1, name: "Smartphone", price: 499, img: "./images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 899, img: "./images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 199, img: "./images/headphones.jpg" },
  { id: 4, name: "Watch", price: 299, img: "./images/watch.jpg" },
  { id: 5, name: "Camera", price: 749, img: "./images/camera.jpg" },
  { id: 6, name: "Tablet", price: 399, img: "./images/tablet.jpg" },
  { id: 7, name: "Gaming Console", price: 299, img: "./images/game.jpg" },
];

export function displayProducts(productList, cart, updateCart) {
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
    });
    productList.appendChild(div);
  });
}
