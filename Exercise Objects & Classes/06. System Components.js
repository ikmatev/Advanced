function solve(params) {
    let obj = {};
    while (params.length > 0) {
        let [system, components, subcomponents] = params.shift().split(' | ');
        if (obj[system] !== undefined) {
            if (obj[system][components] !== undefined) {
                obj[system][components].push(subcomponents);
            }else{
                obj[system][components] = [subcomponents];
            }         
        }else{
            obj[system] = {[components]:[subcomponents]};
        }
    }
    Object.entries(obj)
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]))
    .forEach(x => {
        console.log(x[0])
        Object.keys(x[1]).sort((c, d) => x[1][d].length - x[1][c].length)
        .forEach( y =>{
            console.log(`|||${y}`)
            x[1][y].forEach( z => {
                console.log(`||||||${z}`);
            })
        })
    });
}
solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']

);