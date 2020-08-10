function solve(params) {
    let output = '<table>\n'
    while (params.length > 0) {
        output += '<tr>\n';
        let jsonToObj = JSON.parse(params.shift());
        let keys = Object.keys(jsonToObj);
        keys.forEach(x => output += `<td>${jsonToObj[x]}</td>\n`);
        output += '</tr>\n';
    }
    output += '</table>'
    console.log(output);
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);