function solve(arr){
    let output = arr.sort((a, b) => a - b)
    console.log(output.slice(0,2).join(' '));
}