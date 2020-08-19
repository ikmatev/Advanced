function getFibonator(){
    let fibArr = [0];
    function fib(){
        let fibLength = fibArr.length;
        if (fibLength === 1 || fibLength === 2) {
            fibArr.push(1);
        }else{
            fibArr.push(fibArr.slice(fibLength -2).reduce((acc , a) => acc + a, 0));
        }
        return fibArr[fibLength -1];
    }
    return fib;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
