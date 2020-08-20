function solve(data, criteria){
    let inputDB = JSON.parse(data);
    let [param, value] = criteria.split('-');
    filter(param, value);
    function filter(param, value){
        if (param === 'all') {
            inputDB.forEach((el, i) => {
                console.log(`${i}. ${el.first_name} ${el.last_name} - ${el.email}`);
            });
        }else{
            inputDB.filter(x => x[param] === value).forEach((y, i) => {
                console.log(`${i}. ${y.first_name} ${y.last_name} - ${y.email}`);
            })
        }
    }
}

solve(data, criteria);


