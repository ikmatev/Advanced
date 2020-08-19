function Spy(fn, method){
    let result = {
        count:0
    };
    let func = fn[method];
    if (func) {
        fn[method] = function(...arr){
            result.count++;
            return func.call(this, ...arr);
        }
    }
    return result;
}


let obj = {
    method:(a , b) => console.log(a + '' + b)
}
let spy = Spy(obj,"method");

obj.method(123,123);
obj.method();
obj.method();

console.log(spy) // { count: 3 }

