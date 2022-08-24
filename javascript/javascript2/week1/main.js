const products = getAvailableProducts();

const productsList = document.createElement("ul");
productsList.innerHTML = "'LIST OF PRODUCTS'";
document.body.appendChild(productsList);

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    productsList.appendChild(li);

    const h2 = document.createElement("h2");
    h2.innerHTML = products[i].name;
    li.appendChild(h2);

    const p = document.createElement("p");
    p.innerHTML = "price: " + products[i].price;
    li.appendChild(p);

    const p2 = document.createElement("p");
    p2.innerHTML = "rating: " + products[i].rating;
    li.appendChild(p2);
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details

console.log(products);
console.log(products[0]);

console.log(productsList);
