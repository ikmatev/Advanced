function solve() {
    function computerQualityMixin(Class){
        let getQuality = function() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        }
        let isFast = function (){
            if (this.processorSpeed  > this.ram / 4) { return true };
            return false;
        }
        let isRoomy = function(){
            if (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed) ) { return true };
            return false;
        }
        Class.prototype.getQuality = getQuality;
        Class.prototype.isFast = isFast;
        Class.prototype.isRoomy = isRoomy;
        return Class;
    }

    function styleMixin(Class) {
        let isFullSet = function(){
            if (this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer) {
                return true;
            }
            return false;
        }
        let isClassy = function(){
            if (this.battery.expectedLife >= 3 && 
                (this.color === 'Silver' || this.color === 'Black') &&
                this.weight < 3) {
                return true;
            }
            return false;
        }
        Class.prototype.isFullSet = isFullSet;
        Class.prototype.isClassy = isClassy;
        return Class;
    }
    return{
        computerQualityMixin,
        styleMixin
    }
}