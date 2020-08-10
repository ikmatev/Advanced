function solve(...params) {
    let type = typeof params[0];
    if (type === 'number') {
        console.log((Math.pow(Number(params[0]), 2) * Math.PI).toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
solve('name');