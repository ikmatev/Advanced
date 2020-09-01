
function solve() {
    const taskInput = document.getElementById('task');
    const deskInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const sections = document.querySelectorAll('section');
    const main = document.getElementsByTagName('main')[0];
    const inProgress = document.getElementById('in-progress');

    main.addEventListener('click', addClickHandler);

    function addClickHandler(e) {
        e.preventDefault();
        if (e.target.id === 'add') {
            if (taskInput.value && deskInput.value && dateInput.value) {
                createTask(taskInput.value, deskInput.value, dateInput.value)
            }   
        }
        if (e.target.innerText === 'Delete') {
            removeEl(e);
        }
        if (e.target.innerText === 'Start') {
            progressTask(e);
        }
        if (e.target.innerText === 'Finish') {
            finishEl(e);
        }
    }
    function createTask(title, description, date) {
        let articleEl = document.createElement('article');
        let titleEl = document.createElement('h3');
            titleEl.innerText = title;
        let descriptionEl = document.createElement('p');
            descriptionEl.innerText = 'Description: ' + description;
        let dateEl = document.createElement('p');
            dateEl.innerText = 'Due Date: ' + date;
        let btnDiv = document.createElement('div');
            btnDiv.setAttribute('class', 'flex');
        let btnStart = document.createElement('button')
            btnStart.setAttribute('class', 'green');
            btnStart.innerText = 'Start';
        let btnDel = document.createElement('button');
            btnDel.setAttribute('class', 'red');
            btnDel.innerText = 'Delete';
        articleEl.appendChild(titleEl);
        articleEl.appendChild(descriptionEl);
        articleEl.appendChild(dateEl);
        btnDiv.appendChild(btnStart);
        btnDiv.appendChild(btnDel);
        articleEl.appendChild(btnDiv);
        sections[1].children[1].appendChild(articleEl);
    }
    function progressTask(e) {
        e.target.innerText = 'Delete';
        e.target.classList.remove('green');
        e.target.classList.add('red');
        e.target.nextSibling.innerText = 'Finish';
        e.target.nextSibling.classList.remove('red');
        e.target.nextSibling.classList.add('orange');
        let currentArticle = e.target.parentElement.parentElement;
        e.target.parentElement.parentElement.remove();
        inProgress.appendChild(currentArticle);       
    }

    function removeEl(e) {
        e.target.parentElement.parentElement.remove();
    }

    function finishEl(e) {
        let currentArticle = e.target.parentElement.parentElement;
        e.target.parentElement.parentElement.remove();
        currentArticle.children[3].remove();
        sections[3].children[1].appendChild(currentArticle);
    }
}