const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let currentRotator = 0;
changeText();

function changeText() {
	rotator.forEach(element => {
		element.classList.remove('rotator__case_active');
	})
	rotator[currentRotator].classList.add('rotator__case_active');

	setTimeout(() => {
		changeText()
	}, 2000);

	currentRotator = ((currentRotator + 1) % rotator.length);
}


