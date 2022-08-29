const cart = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
let cartArr = [...products].map((element) => element.getAttribute('data-id'));

infoConstProduct = (element) => {
const quantityControl = element.querySelectorAll('.product__quantity-control');
const productControls = element.querySelector('.product__controls')
const quantityValue = productControls.querySelector('.product__quantity-value');
const imgs = element.querySelector('.product__image').src;
const dataId = element.getAttribute('data-id'); 

quantityControl.forEach(element => {
	element.addEventListener('click', e => {
		if(e.target.classList.contains('product__quantity-control_dec')) {
			if (quantityValue.textContent > 1) {
				quantityValue.innerHTML = quantityValue.textContent - 1;
			}
		} else {
			quantityValue.innerHTML = +quantityValue.textContent + 1;
		}
	})
})

 const addProductButton = productControls.querySelector('.product__add');

   addProductButton.addEventListener('click', () => {
   	const div = document.createElement('div');

   	div.setAttribute('id', dataId);
   	div.classList.add('cart__product');

   	div.innerHTML = `
   	<img class="cart__product-image" src=${imgs}>
   	<div class= "cart__product-count">${quantityValue.textContent}</div>`;

   const productUpdate = cartArr.find(element => element === dataId);
   	if(document.getElementById(productUpdate)) {
   		const foundElement = document.getElementsById(productUpdate);
   		const prevElement = foundElement.querySelector('.cart__product-count').textContent;
   		foundElement.querySelector('.cart__product-count').innerHTML = +quantityValue.textContent;
   	} else {
   			cart.appendChild(div);
   	}
	})  
}
products.forEach((el) => {
	infoConstProduct(el);
})