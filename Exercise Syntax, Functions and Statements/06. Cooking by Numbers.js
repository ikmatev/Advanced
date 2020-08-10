function solve(arr) {
    let num = Number(arr.shift());
    let cooking = {
        chop: a => a / 2,
        dice: a => Math.sqrt(a),
        spice: a => a + 1,
        bake: a => a * 3,
        fillet: a => a - (a*20/100)
    }
    arr.forEach(element => {
        console.log(cooking[element](num))
        num = cooking[element](num);
    });
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);