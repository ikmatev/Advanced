function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', validate);

    function validate(e){
        const regexPattern = /^[a-z]+@[a-z]+\.[a-z]+/g;
        if (!e.target.value.match(regexPattern)) {
            e.target.className = 'error';
            console.log(e.target.value);
        }else{
            e.target.classList.remove('error')
        }   
    }
}