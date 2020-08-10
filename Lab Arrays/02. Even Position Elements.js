function solve(arr){
    let newArr = arr.filter((a, i) => {
        if (i % 2 === 0) {
            return a;
        }
    });
    console.log(newArr.join(' '));
}
solve(['20', '30', '40']);