function orderRectangles(arr){
    let prototypeObj = {
        area(){
            return this.width * this.height;
        },
        compareTo(other){
            let currentArea = this.area();
            let otherArea = other.area();
            return otherArea -currentArea|| other.width - this.width;
        }
    }
    function createObj(width, height){
        let result = Object.create(prototypeObj)
        result.width = width;
        result.height = height;
        return result
    }
    return arr.reduce(function (acc, [width, height]) {
        acc.push(createObj(width, height));
        return acc
    } ,[]).sort((a,b) => a.compareTo(b));
}