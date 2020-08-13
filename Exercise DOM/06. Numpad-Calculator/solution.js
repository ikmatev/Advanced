function solve() {
    let buttons = document.querySelectorAll('.keys > button');
    let clearbutton = document.querySelector('.top > .clear');
    let expressionArr = []; 
    clearbutton.addEventListener('click', () => clearAll());
    for (let el = 0; el < buttons.length; el++) {
        buttons[el].addEventListener('click', function(){
            let currentButton = this.value;
            let expresionOuput = document.getElementById('expressionOutput');
            if (currentButton !== '=') {
                let currentNumber = currentButton;
                if (isNaN(currentNumber) && currentNumber !== '.') {
                    expresionOuput.innerHTML += ' ' + currentNumber + ' ';
                }else{
                    expresionOuput.innerHTML += currentNumber;
                }
            }else{
                let result = document.getElementById('resultOutput');
                let regexMatch = /^[0-9(\.)?]+[+\/\*\-]{1}[0-9]*[\.]?[0-9]+$/g;
                let expressionString = expressionArr.join('');
                let match = expressionString.match(regexMatch);
                if (match !== null) {
                    result.innerHTML = calc[expressionArr[1]](+expressionArr[0],+expressionArr[2]);
                }else{
                    result.innerHTML = 'NaN';   
                }
            }
            expressionArr = expresionOuput.innerHTML.split(' ');
         });   
    }

  
    let calc = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }
    
    function clearAll (){
        document.getElementById('expressionOutput').innerHTML = null;
        document.getElementById('resultOutput').innerHTML = null;
        expressionArr = [];

    }
}