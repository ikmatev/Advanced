function solve(params) {
    let obj = {};
    while (params.length > 0) {
        let [product, price] = params.shift().split(' : ');
        if (obj[product[0]] !== undefined) {
            obj[product[0]][product] = price;
        }else{
            obj[product[0]] = {[product]:price};
        }
    }
    Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])).forEach( x => {
        console.log(x[0])
        Object.keys(x[1]).sort((a,b) => a.localeCompare(b)).forEach(y => {
            console.log(`  ${y}: ${x[1][y]}`) })
    });
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);