function solve(arr){
    let output = arr.map( x => Math.max(...x))
    let maxNum = Math.max(...output);
    console.log(maxNum);
}
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]   
   );