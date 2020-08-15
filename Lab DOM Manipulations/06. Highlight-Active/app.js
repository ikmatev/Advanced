function focus() {
    const inputs = document.getElementsByTagName('input');
    let currentDiv;
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus',markField);
    }

    function markField(e){
        e.target.parentNode.className = 'focused';
        if (currentDiv) {
            currentDiv.removeAttribute('class');
        }
        currentDiv = e.target.parentNode;
    }
}