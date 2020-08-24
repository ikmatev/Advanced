function solve(obj){
    function setEngine (obj){
        let types = {
            closestLow:  { power: 90, volume: 1800 },
            clossestMid: { power: 120, volume: 2400 },
            clossestHigh: { power: 200, volume: 3500 }
        };
        let objEngine = {
            closestLow: Math.abs(obj.power - 90),
            clossestMid: Math.abs(obj.power - 120),
            clossestHigh: Math.abs(obj.power - 200),
            findClosses(){
                let min = Math.min(this.closestLow, this.clossestMid, this.clossestHigh);
                let findclosest = Object.keys(this).filter(a => this[a] === min);
                return findclosest[0];
            }
        }    
        return types[objEngine.findClosses()];
    }
    let engine = setEngine(obj);
    let carriage = {
        type: obj.carriage,
        color: obj.color,
    }
    let wheels = new Array(4).fill(0).map(el => {
        let wheel = Math.floor(obj.wheelsize);
        if (obj.wheelsize % 2 === 0) {
            wheel = Math.floor(obj.wheelsize -1);
            return wheel;
        }
        return wheel;
    });
    return {
        model:obj.model,
        engine: engine,
        carriage: carriage,
        wheels:wheels
    }
}