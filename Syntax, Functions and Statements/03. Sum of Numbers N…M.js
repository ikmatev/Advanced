function solve(...params) {
    let sum = 0;
    for (let i = Number(params[0]); i <= Number(params[1]); i++) {
        sum += i;        
    }
    console.log(sum);
}
solve('1', '5' );