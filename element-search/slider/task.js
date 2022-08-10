let slideIndex = 1;
const itemSlide = document.querySelector('.slider__items').children;

showSlides(slideIndex);

document.querySelector('div.slider__arrow_next').addEventListener('click', nextSlide);
document.querySelector('div.slider__arrow_prev').addEventListener('click', previousSlide);

function nextSlide() {
	showSlides(slideIndex += 1);
}

function previousSlide() {
	showSlides(slideIndex -= 1);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName('slider__item');
	slides[0].classList.add('slider__item_active');

		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i=0; i < slides.length; i++) {
			slides[i].classList = 'slider__item';
		}

		slides[slideIndex - 1].classList.toggle('slider__item_active');
}









