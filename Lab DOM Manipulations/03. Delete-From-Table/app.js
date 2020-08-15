function deleteByEmail() {
    const input = document.getElementsByTagName('input');
    const tDs = Array.from(document.querySelectorAll('tr > td:last-child'));
    const result = document.getElementById('result');
    
    let matched = tDs.find( a => a.innerHTML === input[0].value);

    if (matched !== undefined) {
        matched.parentNode.remove();
        result.innerText = 'Deleted.'
    }else{
        result.innerText = 'Not found.'
    }
    input[0].value = null;
}