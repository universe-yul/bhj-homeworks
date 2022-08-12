const arrTab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < arrTab.length; i++) {
	arrTab[i].addEventListener('click', (event) => {
		let arrTabChildren = event.target.parentElement.nextElementSibling.children;
			for (let t = 0; t < arrTabChildren.length; t++) {
			arrTabChildren[t].classList.remove('tab_active');
			arrTab[t].classList.remove('tab_active');
			}

			arrTab[i].classList.add('tab_active');

		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
			for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove('tab__content_active');
			}

			tabContent[i].classList.add('tab__content_active');
	})
}
