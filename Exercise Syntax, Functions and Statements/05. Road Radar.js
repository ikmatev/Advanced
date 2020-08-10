function solve(arr) {
    let speedLimitObj = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
        speeding: (a , b) => {  
            if (a -speedLimitObj[b] > 0) {
                if ( a -speedLimitObj[b] <= 20 ) {
                    console.log('speeding');
                }else if( a -speedLimitObj[b] <= 40 ){
                    console.log('excessive speeding');
                }else{
                    console.log('reckless driving');
                }
            }
        }
    }
    speedLimitObj['speeding'](arr[0], arr[1]);
}
solve([21, 'residential']);