class Editor {
	constructor() {

		this.__editor_container = document.querySelector('.code-editor-container');

		this.__input = document.createElement('div');
		this.__input.classList.add('code-container');
		this.__editor_container.appendChild(this.__input);

		this.__button_container = document.createElement('div');
		this.__button_container.classList.add('button-container');
		this.__editor_container.appendChild(this.__button_container);
		this.isActive = false;
		
		this.supportedLanguages = [
			'html',
			'css',
			'js'
		];

		this.buttons= [
			"html",
			"css",
			"JS",
			"Demo"
		];

		this.buttons.forEach((_btn) => {
			_btn = new Button(_btn, this.__button_container, null);
		});

		this.supportedLanguages.forEach((_language) => {

			this.CreateInputArea(_language, this.__input);
		});

		this.__html_input = document.getElementById("html");
		this.__css_input = document.getElementById("css");
		this.__js_input = document.getElementById("js");

		this.__preview_container = document.querySelector('.preview-container');
		this.__preview_window = document.createElement('iframe');
		this.__preview_container.appendChild(this.__preview_window);
		this.__preview_window.classList.add('preview-window');
		this.__preview_window.id = 'code';

		this.__preview_context = document.getElementById('code').contentWindow.document;

	}
	CreateInputArea(_id, _container) {

		this.input_area = document.createElement('div');
		this.input_area.classList.add('input-area');

		_container.appendChild(this.input_area);

		//title-container
		this.__title_container = document.createElement('div');
		this.__title_container.classList.add('title-container');
		this.input_area.appendChild(this.__title_container);

		//title
		this.__title = document.createElement('p');
		this.__title.classList.add('title');
		this.__title.innerHTML = _id.toUpperCase();
		this.__title_container.appendChild(this.__title);

		this.__code_input_container = document.createElement('div');
		this.__code_input_container.classList.add('code-input-container');
		this.input_area.appendChild(this.__code_input_container);

		//lines
		this.__lines = document.createElement('textArea');
		this.__lines.classList.add('line-counter');
		this.__code_input_container.appendChild(this.__lines);
		//code
		this.__code = document.createElement('textArea');
		this.__code.id = _id;
		this.__code.classList.add('code');
		this.__code_input_container.appendChild(this.__code);

	}
	CompileCode(_html, _css, _js, _window) {
		_window.open();

		_window.writeln(
			_html.value +
			"<style>" +
			_css.value +
			"</style>" +
			"<script>" +
			_js.value +
			"</script>"
		);
		_window.close();

	}
}



