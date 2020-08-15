function addItem() {
    const input = document.getElementById('newText');
    const listItems = document.getElementById('items');

    if (input.value) {
        let newList = document.createElement('li');
        let deleteBtn = document.createElement('a');
            deleteBtn.innerText = '[Delete]';
            deleteBtn.href = '#';
        newList.innerHTML = input.value;
        newList.appendChild(deleteBtn);
        listItems.appendChild(newList); 
        input.value = null;
    }
    
    const deleteBtns = document.getElementsByTagName('a');

    if (deleteBtns !== undefined) {
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].addEventListener('click', function(e){
                e.target.parentElement.remove();
            } )
            
        }
    }
}