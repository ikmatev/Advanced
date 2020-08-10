function solve(params) {
    let bottlesObj = {};
    let obj = {};
    while (params.length > 0) {
        let [juice , quan] = params.shift().split(' => ');
        quan = Number(quan);
        if (obj[juice] !== undefined) {
            obj[juice] += quan;
        }else{
            obj[juice] = quan;
        }
        if (obj[juice] / 1000 >= 1) {
            let bottles = Math.floor(obj[juice] / 1000);
            if (bottlesObj[juice] !== undefined) {
                bottlesObj[juice] += bottles;
            }else{
                bottlesObj[juice] = bottles;
            }
            obj[juice] -= bottles * 1000;
        }
    }
    Object.entries(bottlesObj).forEach( x => console.log(`${x[0]} => ${x[1]}`));
}
solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);