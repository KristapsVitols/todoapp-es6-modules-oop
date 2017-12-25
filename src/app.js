import { task } from './task';
import { ui } from './ui';

//Event Listeners

//Add task event listener
document.querySelector('.add-task-button').addEventListener('click', addTask);

//Delete task event listener
document.querySelector('.task-list').addEventListener('click', deleteTask);

//Complete task event listener
document.querySelector('.task-list').addEventListener('click', toggleCompleteTask);

//Update task error event listener
document.querySelector('#task').addEventListener('blur', updateError);



//Add task
function addTask() {
	if(ui.taskInput.value === '') {
		ui.showError();
	} else {
		task.addTask(ui.taskInput.value);
		ui.clearError();
		ui.clearInput();
	}
}

//Remove task
function deleteTask(e) {
	task.deleteTask(e);
}

//Toggle Complete task
function toggleCompleteTask(e) {
	task.toggleCompleteTask(e);
}

//Update error
function updateError() {
	if(ui.taskInput.value === '') {
		ui.showError();
	} else {
		ui.clearError();
	}
}