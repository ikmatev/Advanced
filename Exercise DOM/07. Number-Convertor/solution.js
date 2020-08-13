function solve() {
    let button = document.getElementsByTagName('button');
    let to = document.getElementById('selectMenuTo');
    let optionBinary = document.createElement('option');
    optionBinary.text = 'Binary';
    optionBinary.value = 'binary';

    let optionHex = document.createElement('option');
    optionHex.text = 'Hexadecimal';
    optionHex.value = 'hexadecimal';

    to.appendChild(optionBinary);
    to.appendChild(optionHex);

    button[0].addEventListener('click', function(){
        let number = document.getElementById('input').value;
        let from = document.getElementById('selectMenuFrom').value;
        let result = document.getElementById('result');
        if (number !== '' && from === 'decimal') {
            if (to.value === 'binary') {
                result.value = decimalToBinary(number);             
            }else if(to.value === 'hexadecimal'){
                result.value = decimalToHexa(number);
            }
        }
    });
    function decimalToBinary(number){
        let num = number;
        let result = []
        while (num > 0) {
            let digit = num % 2;
            result.unshift(digit.toString());
            num  = Math.floor(num / 2);        
        }
        return result.join('');
    }
    function decimalToHexa(number){
        let num = Number(number);
        return num.toString(16).toUpperCase();
    }
}