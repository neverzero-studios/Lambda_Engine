class ProjectInformation{
    constructor(_profile_img_src){
        this.__container = document.querySelector('.code-tools-container');
        this.__background = document.createElement('div');
        this.__background.classList.add('info-container');
        this.__container.appendChild(this.__background);

        this.__pic_container = document.createElement('div');
        this.__pic_container.classList.add('pic-container');
        this.__background.appendChild(this.__pic_container);

        this.__profile_picture = document.createElement('img');
        this.__profile_picture.classList.add('img');
        this.__profile_picture.src = _profile_img_src;
        this.__pic_container.appendChild(this.__profile_picture);
        this.__author = document.createElement('div');
        this.__author.classList.add('author');
        this.__background.appendChild(this.__author);


        this.projectName = document.createElement('h1');
        this.projectName.innerText = 'Code Editor v0.00.1'
        this.__author.appendChild(this.projectName);

        this.projectDev = document.createElement('p');
        this.projectDev.innerText = 'A page by: _________'
        this.__author.appendChild(this.projectDev);
        
        this.projectDate = document.createElement('h3');
        this.projectDate.innerText = 'created on: __/__/__'
        this.__author.appendChild(this.projectDate);

    }
}
var profile_img_src = './img/profile_dummy.jpg';
const info = new  ProjectInformation(profile_img_src);