function solve(...params) {
    let gcd = 1;
    let minNum = params.sort(( a, b ) => a - b);
    for (let i = 1; i <= minNum[0]; i++) {
        if (params[0] % i === 0 && params[1] % i === 0) {
            gcd = i;
        }        
    }
    console.log(gcd);
}
solve(2154, 458);