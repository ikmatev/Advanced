function solve(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i+= 2) {
        if (obj[arr[i]] !== undefined) {
            obj[arr[i]] += Number(arr[i + 1]);
        }else{
            obj[arr[i]] = Number(arr[i + 1]);
        }
    }
    console.log(obj);
}
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);