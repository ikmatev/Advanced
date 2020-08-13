function toggle() {
    let button = document.getElementsByClassName('button');
    if (button[0].innerHTML === 'More') {
        button[0].innerHTML = 'Less'
    }else{
        button[0].innerHTML = 'More'
    }
    let lessText = document.getElementById('extra');
    if (lessText.style['display'] === 'block') {
        lessText.setAttribute('style', 'display:none');
    }else{
        lessText.setAttribute('style', 'display:block');
    }
}