function solve(arr){
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr[i].length; y++) {
            if (arr[i][y] === arr[i][y + 1]) {
                counter++;
            }
            if (arr[i][y] === (arr[i + 1 ] || [])[y]) {
                counter++;
            }           
        }
    }
    console.log(counter);
}
solve([['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']]
        );