function solve(input){
    let commander = {
        add(acc, el) { 
            acc.push(el);
            return acc
        }, 
        remove(acc, el) { 
            return acc.filter(a => a !== el);
        },
        print(acc) {
            console.log(acc.join(','));
            return acc;
        }
    }
    input.reduce((acc, item) =>{
        let [command, str] = item.split(' ');
        acc = commander[command](acc, str);
        return acc;
    } ,[])
}