function solve(input){
    let arr = JSON.parse(input);
    let result = arr.reduce((acc, obj) => {
        acc = {...acc , ...obj};
        return acc;
    }, {});
    return result;
}
