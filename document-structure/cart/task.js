const products = document.getElementsByClassName("product");

infoConstProduct = (element) => {
  const quantityControl = element.querySelectorAll(".product__quantity-control");
  const productControls = element.querySelector(".product__controls");
  const quantityValue = productControls.querySelector(".product__quantity-value");

  quantityControl.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.classList.contains("product__quantity-control_dec")) {
        if (quantityValue.textContent > 1) {
          quantityValue.innerHTML = quantityValue.textContent - 1;
        }
      } else {
        quantityValue.innerHTML = +quantityValue.textContent + 1;
      }
    });
  });

  const addProductButton = productControls.querySelector(".product__add");

  addProductButton.addEventListener("click", () => {
    const imgs = element.querySelector(".product__image").src;
    const dataId = element.getAttribute("data-id");
    const div = document.createElement("div");
    const cartArr = element.getAttribute('data-id'); //

    div.setAttribute("id", dataId);
    div.classList.add("cart__product");

    div.innerHTML = `<img class="cart__product-image" src=${imgs}>
   	<div class= "cart__product-count">${quantityValue.textContent}</div>`;

    const cart = document.querySelector(".cart__products");

    if (document.getElementById(cartArr)) {
      const foundElement = document.getElementById(dataId);
      const prevElement = foundElement.querySelector(".cart__product-count").textContent;
      foundElement.querySelector(".cart__product-count").innerHTML = +prevElement + +quantityValue.textContent;
    } else {
      cart.appendChild(div);
    }
  });
};

for (el of products) { 
  infoConstProduct(el);
}


