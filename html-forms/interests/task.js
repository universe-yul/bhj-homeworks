const interestMenu = document.querySelectorAll('.interest__check');

for (let elementMenu of interestMenu) {
	elementMenu.addEventListener('change', () => {
		const subElementMenu = elementMenu.closest('.interest').querySelectorAll('.interest__check');

		if (elementMenu.checked && elementMenu.closest('ul.interests_active') == null) {
			for (let subMenu of subElementMenu) {
					subMenu.checked = true;
			}
			
		} else if (!elementMenu.checked && elementMenu.closest('ul.interests_active') == null) {
			for (let subMenu of subElementMenu) {
					subMenu.checked = false;
			}
		}	
	})
}
