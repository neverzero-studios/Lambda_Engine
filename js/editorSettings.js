﻿class EditorSettings {
	constructor() {
		this.__tools_container = document.querySelector('.code-tools-container');

		this.__background = document.createElement('div');
		this.__background.classList.add('tools-background');

		this.__tools_container.appendChild(this.__background);

		this.buttons = [
			"exit",
			"run",
			"save"
		];

		this.buttons.forEach((_btn) => {
			this.buttons = new Button(_btn, this.__background, null);
		});

	}


}

class Application {
	constructor() {
		this.editorSettings = new EditorSettings();
		this.editor = new Editor();

		this.settings_buttons = document.querySelectorAll('.tools-background .btn');
		this.editor_buttons = document.querySelectorAll('.button-container .btn');

		this.editor_buttons.forEach((_btn) => {
			_btn.addEventListener('mouseover', (event) => {
				_btn.classList.add('hover');
				event.stopPropagation();
			});
			_btn.addEventListener('mouseout', (event) => {
				_btn.classList.remove('hover');
				event.stopPropagation();
			});
			_btn.addEventListener('click', (event) => {
				_btn.classList.toggle('active');
				_btn.is_active = !_btn.is_active;

				console.log(_btn.is_active);
				event.stopPropagation();
				if (_btn.is_active) {
					//to do

				}
			});


		});

		this.inputAreas = document.querySelectorAll('.input-area');

		this.run_btn = this.settings_buttons[1];

		this.run_btn.addEventListener('click', (event) => {
			this.editor.CompileCode(
				this.editor.__html_input, this.editor.__css_input, this.editor.__js_input,
				this.editor.__preview_context
			);
		});
	}
}
 const app = new Application();


