function solve(...params) {
    let regexPatern = /^([0-9])\1*$/;
    let sum = params[0].toString().split('').reduce((acc, x) => acc + Number(x), 0);
    if (params[0].toString().match(regexPatern) !== null) {
        console.log('true');
        console.log(sum);
    }else{
        console.log('false');
        console.log(sum);
    }
}
solve(1230);