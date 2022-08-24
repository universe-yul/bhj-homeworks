const interestMenu = document.querySelectorAll('.interest__check');

for (let elementMenu of interestMenu) {
	subElementMenu = elementMenu.closest('.interest').querySelectorAll('.interest__check');
	elementMenu.addEventListener('change', () => {
		if (elementMenu.checked) {
			if (subElementMenu) {
				for (let subMenu of subElementMenu) {
					subMenu.checked = true;
				}
			}
		} else {
			if (subElementMenu) {
				for (let subMenu of subElementMenu) {
					subMenu.checked = false;
				}
			}
		}	
	})
}
