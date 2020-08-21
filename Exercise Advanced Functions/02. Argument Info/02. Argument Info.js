function solve(...args){
    let objOfTypes = {};
    args.forEach( x => {
        if (objOfTypes[typeof x]) {
            objOfTypes[typeof x] += 1;
        }else{  
            objOfTypes[typeof x] = 1;
        }
        console.log(`${typeof x}: ${x}`)
    });
    let sortedArr  = Object.entries(objOfTypes).sort((a, b) => b[1] - a[1]);
    sortedArr.forEach( x => console.log(`${x[0]} = ${x[1]}`));
}