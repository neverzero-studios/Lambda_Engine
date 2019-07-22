class EditorSettings {
	constructor() {
		this.__tools_container = document.querySelector('.code-tools-container');

		this.__buttons_container = document.createElement('div');
		this.__buttons_container.classList.add('tools-background');

		this.__tools_container.appendChild(this.__buttons_container);

		this.buttons = [
			"exit",
			"run",
			"save"
		];

		this.buttons.forEach((_btn) => {
			this.buttons = new Button(_btn, this.__buttons_container);
		});

	}


}