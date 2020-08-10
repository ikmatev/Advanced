function solve(arr){
    let output = arr.filter((_ , i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse();
    console.log(output.join(' '));
}
solve([10, 15, 20, 25]);