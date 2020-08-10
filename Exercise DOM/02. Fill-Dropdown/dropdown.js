function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;

    if (inputText !== '' && inputValue !== '') {
        let select = document.getElementById('menu');
        let option = document.createElement('option');
        option.value = inputValue;
        option.textContent = inputText;
        select.appendChild(option);
    }
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}