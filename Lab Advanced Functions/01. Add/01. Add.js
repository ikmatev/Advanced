function solution(num){
    let number = num;
    return function add5(arg){
        return number + arg;
    }
}
