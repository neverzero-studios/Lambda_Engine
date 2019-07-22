class Application {
    constructor() {

        this.editorSettings = new EditorSettings();
        this.editor = new Editor();

        this._buttons = document.querySelectorAll('.btn');

        this._buttons.forEach((_btn) => {
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
                if (_btn.classList.contains('active')) {
                    _btn.is_active = true;
                } else {
                    _btn.is_active = false;
                };
                if (_btn === this._buttons[1]) {
                    this.editor.CompileCode(
                        this.editor.__html_input, this.editor.__css_input, this.editor.__js_input,
                        this.editor.__preview_context
                    );
                }
            });
            //Run Button-------------------------------------
        });
        this._code_buttons = [
            this._buttons[3],
            this._buttons[4],
            this._buttons[5]
        ];
        this.input_areas = document.querySelectorAll('.input-area');

        this.input_areas.forEach((_area) => {
            _area.classList.add('close');
        });

        this._code_buttons.forEach((_btn) => {

            _btn.addEventListener('click', (event) => {
                if (this._buttons[3].is_active) {
                    this.input_areas[0].classList.remove('close');
                } else {
                    this.input_areas[0].classList.add('close');
                }
                if (this._buttons[4].is_active) {
                    this.input_areas[1].classList.remove('close');
                } else {
                    this.input_areas[1].classList.add('close');
                }
                if (this._buttons[5].is_active) {
                    this.input_areas[2].classList.remove('close');
                } else {
                    this.input_areas[2].classList.add('close');
                }
            })

        })
    };


}

var app = new Application();