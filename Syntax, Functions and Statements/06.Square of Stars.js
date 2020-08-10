function solve(...params) {
    if (params[0]) {
        let line = '* '.repeat(params[0]) + '\n';
        console.log(line.repeat(params[0]));
    }else{
        console.log('* * * * *\n'.repeat(5));
    }
}
solve(2);