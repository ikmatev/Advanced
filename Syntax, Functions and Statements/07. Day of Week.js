function solve(...params) {
    let daysOjb = {
        Monday: 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }
    if (params[0] in daysOjb){
        console.log(daysOjb[params[0]]);
    }else{
        console.log('error');
    }
}
solve('Friday');