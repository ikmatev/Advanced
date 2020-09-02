function solve() {
    const nameEl = document.querySelector('input[placeholder="Name"]');
    const ageEl = document.querySelector('input[placeholder="Age"]');
    const kindEl = document.querySelector('input[placeholder="Kind"]');
    const ownerEl = document.querySelector('input[placeholder="Current Owner"]');
    const addBtn = document.querySelector('#container button');
    const sectionEl = document.querySelectorAll('section');

    const adoptionUl = document.querySelector('#adoption ul');
    const adoptedUl = document.querySelector('#adopted ul');

    addBtn.addEventListener('click',clickHandlerAddBtn);

    for (let i = 0; i < sectionEl.length; i++) {
        sectionEl[i].addEventListener('click', clickHandlerOther);
    }

    function clickHandlerOther(e) {
        if (e.target.localName === 'button' && e.target.innerText === 'Contact with owner') {
            crateNewOwnerForm(e);
        }
        if (e.target.localName === 'button' && e.target.innerText === 'Yes! I take it!') {
            if (e.target.previousSibling.value.trim() !== '') {
                createAdoptedAnimal(e);            
            }
        }
        if (e.target.localName === 'button' && e.target.innerText === 'Checked') {
            removeLi(e);
        }
    }

    function clickHandlerAddBtn(e){
        e.preventDefault();
        if (e.target.localName === 'button' && e.target.innerText === 'Add') {
            if (nameEl.value.trim() !== '' &&
                !isNaN(ageEl.value) &&
                kindEl.value.trim() !== '' &&
                ownerEl.value.trim() !== ''
            ){
                crateAdoptionElements();
            }
        }
    }
    function crateAdoptionElements() {
        let listItem = document.createElement('li');
        let pItem = document.createElement('p');
            pItem.innerHTML = `<strong>${nameEl.value}</strong> is a <strong>${ageEl.value}</strong> year old <strong>${kindEl.value}</strong>`;
        let spanItem = document.createElement('span');
            spanItem.innerText = 'Owner: ' + ownerEl.value;
        let btnItem = document.createElement('button');
            btnItem.innerText = 'Contact with owner';
            listItem.appendChild(pItem);
            listItem.appendChild(spanItem);
            listItem.appendChild(btnItem);
            adoptionUl.appendChild(listItem);
            nameEl.value = null;
            ageEl.value = null;
            kindEl.value = null;
            ownerEl.value = null;
    }
    function crateNewOwnerForm(e) {
        let currentLi = e.target.parentElement;
        e.target.remove();
        let divEl = document.createElement('div');
        let inputEl = document.createElement('input');
            inputEl.setAttribute('placeholder', 'Enter your names');
        let buttonEl = document.createElement('button');
            buttonEl.innerText = 'Yes! I take it!';
        divEl.appendChild(inputEl);
        divEl.appendChild(buttonEl);
        currentLi.appendChild(divEl);
    }
    function createAdoptedAnimal(e) {
        let currentLi = e.target.parentElement.parentElement;
        let inputValue = e.target.previousSibling.value;
        e.target.parentElement.remove();
        currentLi.children[1].innerText = 'New Owner: ' + inputValue;
        let btnEl = document.createElement('button');
            btnEl.innerText = 'Checked';
        currentLi.appendChild(btnEl);
        currentLi.remove();
        adoptedUl.appendChild(currentLi);
    }
    function removeLi(e) {
        e.target.parentElement.remove();
    }
}

