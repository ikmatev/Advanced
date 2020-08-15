function addItem() {
    let input = document.getElementById('newItemText');
    let listItems = document.getElementById('items');
    let newList = document.createElement('li');
        newList.innerHTML = input.value;
        listItems.appendChild(newList);
    input.value = null;
}