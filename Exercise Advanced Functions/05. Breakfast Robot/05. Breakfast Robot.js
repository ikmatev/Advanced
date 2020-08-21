function solution() {
    let objInstock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    function hasMissingEl (){
        let hasMissing = Object.keys(this).find( x =>{ 
            return objInstock[x] - this[x] < 0 
          });
          if (!hasMissing) {
              Object.keys(this).forEach( x => objInstock[x] -= this[x]);
              return 'Success'
          }
          return hasMissing;
    }

    let recipe = {
        apple: (a) => { 
            return hasMissingEl.call({carbohydrate: 1 * a, flavour: 2 * a});
        },
        lemonade: (a) => {
             return hasMissingEl.call({carbohydrate: 10 * a, flavour: 20 * a})
            },
        burger:  (a) => { 
            return hasMissingEl.call({carbohydrate: 5 * a, fat: 7 * a ,flavour: 3 * a})
            },
        eggs:  (a) => { 
            return hasMissingEl.call({protein: 5 * a, fat : 1 * a, flavour: 1 * a})
        },
        turkey:  (a) => { 
            return hasMissingEl.call({protein: 10 * a, carbohydrate: 10 * a ,fat : 10 * a, flavour: 10 * a})
        },
    }
    return function(input) {
        let [command, prod, quan] = input.split(' ');
        quan = Number(quan)
        try {
            switch (command) {
                case 'restock':
                    objInstock[prod] = quan;
                    return 'Success'
                case 'prepare':
                    let doze = recipe[prod](quan);
                    if (doze !== 'Success') {
                        throw `Error: not enough ${doze} in stock`; 
                    }
                    return doze;
                case 'report':
                    return Object.keys(objInstock).map(x => `${x}=${objInstock[x]}`).join(' ');
            }
        } catch (error) {
            return error;
        }
    }
}

let manager = solution();
let test1 = manager("restock carbohydrate 10");  // Success
let test2123 = manager("restock flavour 10");  // Error: not enough carbohydrate in stock
let test2 = manager("prepare apple 1");  // Error: not enough carbohydrate in stock
let test3= manager('restock fat 10');
let test4= manager('prepare burger 1');
let test5= manager('report');
let test3323= manager('restock fat 10');
let test3123= manager('restock fat 10');