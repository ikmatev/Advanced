function subtract() {
    let firstNum = document.getElementById('firstNumber');
    let secondNum = document.getElementById('secondNumber');

    document.getElementById('result').innerHTML = Number(firstNum.value) - Number(secondNum.value);
}