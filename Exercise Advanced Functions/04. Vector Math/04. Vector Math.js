(function (){
    return solution = {
        add: (x, y) => [x[0] + y[0], x[1] + y[1]],
        multiply: (x, sc) => x.map(el => el * sc),
        length: (x) => Math.sqrt(Math.pow(x[0],2) + Math.pow(x[1],2)), 
        dot: (x, y) => (x[0] * y[0]) + (x[1] * y[1]),
        cross: (x, y) => (x[0] * y[1]) - (y[0] * x[1]),
    }
}())