function solve(arr) {
    let distance = {
        checkByZeero: (a, b) => Number.isInteger(Math.sqrt(Math.pow(a,2) + Math.pow(b,2))) ? console.log(`{${a}, ${b}} to {0, 0} is valid`) : console.log(`{${a}, ${b}} to {0, 0} is invalid`),
        secondPair: (a, b, c, d) => Number.isInteger(Math.sqrt(Math.pow(a-c, 2) + Math.pow(b - d, 2))) ? console.log(`{${a}, ${b}} to {${c}, ${d}} is valid`) : console.log(`{${a}, ${b}} to {${c}, ${d}} is invalid`)
    }
    distance['checkByZeero'](arr[0], arr[1]);
    distance['checkByZeero'](arr[2], arr[3]);
    distance['secondPair'](arr[0], arr[1],arr[2], arr[3]);
}
solve([-2, 1, -1, 1]);