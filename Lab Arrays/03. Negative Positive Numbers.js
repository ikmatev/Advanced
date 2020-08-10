function solve(arr){
    let newArr = []
    arr.forEach( x => ((x >= 0) ? newArr.push(x) : newArr.unshift(x)))
    newArr.forEach( (x, i) => console.log(x));
}
solve([7, -2, 8, 9]);