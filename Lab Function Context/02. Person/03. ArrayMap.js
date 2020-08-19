function arrayMap(arr, fn){
    return arr.reduce((acc, a) => {
        acc.push(fn(a));
        return acc;
    }, [])
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); 
