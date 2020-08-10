function solve(...params) {
    let sum = 0;
    for (const iterator of params) {
        sum += iterator.length;
    }
    console.log(sum);
    console.log(Math.floor(sum / params.length));
}
solve('chocolate', 'ice cream', 'cake');