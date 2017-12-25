class Task {
	constructor() {
		this.taskInput = document.querySelector('#task');
		this.taskList = document.querySelector('.task-list');
	}

	//Add task
	addTask(task) {
		//Create li
		const li = document.createElement('li');

		//Add icons
		li.innerHTML = `<div class="icons">
						<i class="fa fa-check complete" title="Completed" aria-hidden="true"></i>
						<i class="fa fa-trash-o delete" title="Delete" aria-hidden="true"></i>
					</div>`;

		//Add task text
		li.appendChild(document.createTextNode(task));

		//Apend task to list
		this.taskList.appendChild(li);
	}

	//Delete task
	deleteTask(e) {
		if(e.target.classList.contains('delete')) {
			e.target.parentElement.parentElement.remove();
		}
	}

	//Toggle complete task
	toggleCompleteTask(e) {
		if(e.target.classList.contains('complete')) {
			e.target.className = 'fa fa-times uncomplete';
			const li = e.target.parentElement.parentElement;
			li.className += 'completed';
		} else if(e.target.classList.contains('uncomplete')) {
			e.target.className = 'fa fa-check complete';
			const li = e.target.parentElement.parentElement;
			li.className = '';
		}
	}
}

export const task = new Task();