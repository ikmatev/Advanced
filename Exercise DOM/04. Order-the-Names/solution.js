function solve() {
    let buttonEvent = document.getElementsByTagName('button');
    buttonEvent[0].addEventListener('click', () => addNamesToLit());
    function addNamesToLit(){
        let listItems = document.getElementsByTagName('li');
        let input = document.getElementsByTagName('input');
        if (input[0].value !== '') {
            let firtstLetter = input[0].value;
            let asciiCode = firtstLetter[0].toUpperCase().charCodeAt(0) - 65;
            let editedName = firtstLetter[0].toUpperCase() + (firtstLetter.slice(1)).toLowerCase();
            if (listItems[asciiCode].innerHTML !== '') {
                listItems[asciiCode].innerHTML += ', ' + editedName;
            }else{
                listItems[asciiCode].innerHTML = editedName;
            }
        }
        input[0].value = null;
    }
}