function solve(arr) {
    let sum = 0;
    let sumHalf = 0;
    let concatenated = '';
    for (const iterator of arr) {
        sum+= iterator;
        sumHalf += 1 / iterator;
        concatenated += iterator;
    }
    console.log(sum);
    console.log(sumHalf);
    console.log(concatenated);
}
solve([1, 2, 3]);