function arrayMap(arr, fn){
    return arr.reduce((acc, a) => {
        acc.push(fn(a));
        return acc;
    }, [])
}