class UI {
	constructor() {
		this.taskInput = document.querySelector('#task');
	}

	//Clear input
	clearInput() {
		this.taskInput.value = '';
	}

	//Show error if empty input
	showError() {
		this.taskInput.style.borderBottom = '2px solid #96281B';
	}

	//Clear error from input
	clearError() {
		this.taskInput.style.borderBottom = '2px solid #F27935';
	}
}

export const ui = new UI();