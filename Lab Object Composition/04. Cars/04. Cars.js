function solve(input){

    let controller = {
        create(acc, el, inheritans, el2){
            if (inheritans) {
                acc[el] =  Object.create(acc[el2]);
                return acc;
            }
            acc[el] = {};
            return acc;
        },
        set(acc, el, key, val){
            acc[el][key] = val;       
            return acc;
        },
        print(acc, name){
           let result = [];
            for (const key in acc[name]) {
                result.push(`${key}:${acc[name][key]}`)
            }
            console.log(result.join(', '));
            return acc
        }
    }

    return input.reduce((acc, a) => {
        let [commands, ...args] = a.split(' ');
        acc = controller[commands](acc, ...args);
        return acc;
    }, {})
}