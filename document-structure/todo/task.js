const tasksInput = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const taskslist = document.getElementById('tasks__list');

button.addEventListener('click', (e) => {
	e.preventDefault();

	if (tasksInput.value.trim().length > 0) {
		const task = document.createElement('div');
		task.classList.add('task');

		task.innerHTML = 
		`<div class="task__title"> 
		${tasksInput.value}
		</div>
		<a href="#" class="task__remove">&times;</a>`;

		taskslist.appendChild(task);
		const buttonRemove = task.querySelector('.task__remove');

		buttonRemove.addEventListener('click', (e) => {
			e.target.closest('.task').remove()
		})

		tasksInput.value = '';
	} 
})