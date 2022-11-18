const products = getAvailableProducts();
// console.log(products);

const searchInput = document.querySelector("#searchInput");
const maxPriceInput = document.querySelector("#maxPrice");
const productsList = document.querySelector("ul");

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const title = document.createElement("li");
    title.innerHTML = products[i].name;
    title.style.fontWeight = "bold";
    productsList.appendChild(title);

    const price = document.createElement("li");
    price.innerHTML = "price: " + products[i].price;
    productsList.appendChild(price);

    const rating = document.createElement("li");
    rating.innerHTML = "rating: " + products[i].rating;
    productsList.appendChild(rating);
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details

// console.log(products);
// console.log(products[0]);

// console.log(productsList);

////////////////////////////// PART 2

// 2.2 - Searching for products

searchInput.addEventListener("keyup", function () {
  const inputValue = searchInput.value;
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  if (!inputValue || inputValue === " ") {
    productsList.innerHTML = "";
    alert("Please enter product name!");
    renderProducts(products);
  } else if (filteredProducts.length > 0) {
    productsList.innerHTML = "Search result:";
    renderProducts(filteredProducts);
  }
});

//
// 2.3 - Searching for products
maxPriceInput.addEventListener("keyup", function () {
  const maxInput = Number(maxPriceInput.value);

  const maxPriceFilter = products
    .filter((product) => product.price <= maxInput)
    .sort((a, b) => a.price - b.price); // ascending order of price
  if (!maxInput) {
    alert("Type maxium product price!");
    renderProducts(maxPriceFilter);
  } else {
    productsList.innerHTML = `Itens found with maximum price of $${maxInput},00:`;
    // productsList.style.fontWeight = "bold";
    renderProducts(maxPriceFilter);
  }
});
