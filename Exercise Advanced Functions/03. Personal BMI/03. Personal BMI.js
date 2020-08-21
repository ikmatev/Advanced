function solve(name, age, weight, height){
    let obj = { 
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2))
    }
    calcStatus.call(obj);
    
    function calcStatus(){
        if (this.BMI < 18.5) { return this['status'] = 'underweight' };
        if (this.BMI < 25) { return this['status']  = 'normal' };
        if (this.BMI < 30) { return this['status'] = 'overweight' }
        if (this.BMI >= 30) {  this['status']  = 'obese' ; return this['recommendation']  = 'admission required'}
    }  
    return obj;
}