function solve(...params) {
    console.log(`I need \$${(params[1] * (params[2] / 1000)).toFixed(2)} to buy ${(params[1]/1000).toFixed(2)} kilograms ${params[0]}.`);
}
solve('apple', 1563, 2.35);