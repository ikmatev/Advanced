function solve(...params){
    let arr = [];
    for (let i = 0; i < params[0]; i++) {
        if (i === 0) {
            arr.push(1);
        }else{
            let startIndex = (i - params[1]) < 0 ? 0 : i - params[1];
            let sum = arr.slice(startIndex, i).reduce(( acc, a) => acc + a, 0);
            arr.push(sum);
        }       
    }
    console.log(arr.join(' '));
}
solve(8, 2);