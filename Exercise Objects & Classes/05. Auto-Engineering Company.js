function solve(params) {
    let obj = {};
    while (params.length > 0) {
        let [car, carModel, produced] = params.shift().split(' | ');
        produced = Number(produced);
        if (obj[car] !== undefined) {
            if (obj[car][carModel] !== undefined) {
                obj[car][carModel] += produced;
            }else{
                obj[car][carModel] = produced;
            }         
        }else{
            obj[car] = {[carModel]:produced};
        }
    }
    let test = Object.entries(obj).forEach(x => {
        console.log(x[0])
        Object.keys(x[1]).forEach( y => console.log(`###${y} -> ${x[1][y]}`))
    });
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);