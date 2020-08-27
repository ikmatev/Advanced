function solve() {
    class Figure{
        constructor(unit = 'cm'){
            this.unit = unit;
        }
        changeUnits(newUnit){
            this.unit = newUnit;
        }
        transformUnits(value){
            if (this.unit === 'mm') {return value * 10;}
            if (this.unit === 'm') {return value / 100;}
            return value;
        }
    }
    class Circle extends Figure{
        constructor(radius , unit){
            super(unit)
            this.radius = radius;
        }
        get area(){
            let radius = this.transformUnits(this.radius);
            return Math.PI * radius * radius;
        }
        toString(){
            let radius = this.transformUnits(this.radius);
            return `Figures units: ${this.unit} Area: ${this.area} - radius: ${radius}`
        } 
    }
    class Rectangle extends Figure{
        constructor(width, height, unit){
            super(unit);
            this.width = width;
            this.height = height;
        }
        get area(){
            let width = this.transformUnits(this.width);
            let heigth = this.transformUnits(this.height);
            return width * heigth;
        }
        toString(){
            let width = this.transformUnits(this.width);
            let height = this.transformUnits(this.height);
            return `Figures units: ${this.unit} Area: ${this.area} - width: ${width}, height: ${height}`
        } 
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}