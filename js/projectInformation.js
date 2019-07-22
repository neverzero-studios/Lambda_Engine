class ProjectInformation{
    constructor(){
        this.__container = document.querySelector('.code-tools-container');
        this.__background = document.createElement('div');
        this.__background.classList.add('info-container');
        this.__container.appendChild(this.__background);

        this.__dev_pic = document.createElement('div');
        this.__dev_pic.classList.add('pic');
        this.__background.appendChild(this.__dev_pic);

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

const info = new  ProjectInformation();