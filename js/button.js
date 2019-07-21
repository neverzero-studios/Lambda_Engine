class Button {
	constructor(_name = null, _target, _src = null) {
		this.isActive = false;
		this.__button = document.createElement('div');
		if (_src !== null) {
			this.__button_img = document.createElement('img');
			this.__button_img.classList.add('img');
			this.__button_img.src = _src;
			this.__button.appendChild(this.__button_img);
		}
		else if (_name !== null) {
			this.__button_txt = document.createElement('p');
			this.__button_txt.classList.add('txt');
			this.__button_txt.innerHTML = _name;
			this.__button.appendChild(this.__button_txt);
		}

		this.__button.classList.add('btn');
		_target.appendChild(this.__button);
	}
}