function solve() {
    const ddBtn = document.getElementById('dropdown');
    const ul = document.getElementById('dropdown-ul');
    const li = document.getElementsByTagName('li');
    const box = document.getElementById('box');

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', changeColor);       
    }

    ddBtn.addEventListener('click', dropDown);

    function dropDown(e){
        if (!ul.style.display || ul.style.display === 'none') {
            ul.style.display = 'block'
        }else{
            box.style.color = 'white';
            box.style.backgroundColor = 'black';
            ul.style.display = 'none';
        }
    }

    function changeColor(e){
        box.style.backgroundColor = this.innerText;
        box.style.color = 'black';
    }
}