function solve(...params) {
    let calc = {
        '+': (a, b) =>  a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,
    }
    console.log(calc[params[2]](params[0],params[1]));
}
solve(3, 5.5, '*');