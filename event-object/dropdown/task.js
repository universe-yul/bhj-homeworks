const dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
dropdownValue[0].addEventListener('click', dropdownMenu);

function dropdownMenu() {
	const dropdownList = Array.from(document.getElementsByClassName('dropdown__list'));
	dropdownList[0].classList.toggle('dropdown__list_active');

	const links = document.querySelectorAll('.dropdown__item');
  
  	links.forEach((link) => {
	    link.onclick = function (event) {
	    dropdownList[0].classList.toggle('dropdown__list_active');
	    document.querySelector('.dropdown__value').textContent = event.target.innerText;
		  return false
		}
	}) 		
}

