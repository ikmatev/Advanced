function solve(params) {
    let arrOfObj = [];
    while (params.length > 0) {
        let [heroName, heroLevel, items] = params.shift().split(' / ');
        heroLevel = Number(heroLevel);
        let itemsArr = items ? items.split(', ') : [];
        let obj = {name:heroName, level:heroLevel, items:itemsArr};
        arrOfObj.push(obj);
    }
    console.log(JSON.stringify(arrOfObj));
}
solve(['Isacc / 25 / ',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);