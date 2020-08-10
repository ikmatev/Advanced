function solve(...params) {
    let sum = params.sort((a, b) => b - a);
    console.log(`'The largest number is ${sum[0]}.`);
}
solve(5, -3, 16);