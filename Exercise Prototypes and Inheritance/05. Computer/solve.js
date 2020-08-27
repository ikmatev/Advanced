function solve() {
    class Manufacturer{
        constructor(manufacturer){
            this.manufacturer = manufacturer;            
        }
    }
    class Keyboard extends Manufacturer{
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }
    class Monitor extends Manufacturer{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }
    class Battery extends Manufacturer{
        constructor (manufacturer, expectedLife){
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }
    class Computer extends Manufacturer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            super(manufacturer);
            if(this.constructor == Computer){
                throw new TypeError('')
            }
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace,  weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this._battery = null;
            this.battery = battery;
        }
        get battery(){
            return this._battery;
        }
        set battery(bat){
            if (bat instanceof Battery) {
                this._battery = bat;
            }else{
                throw new TypeError();
            }
        }
    }
    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this._keyboard = null;
            this.keyboard = keyboard;
            this._monitor = null;
            this.monitor = monitor
        }
        get keyboard(){
            return this._keyboard;
        }
        set keyboard(key){
            if (key instanceof Keyboard) {
                this._keyboard = key;
            }else{
                throw new TypeError();
            }
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(mon){
            if (mon instanceof Monitor) {
                this._monitor = mon;
            }else{
                throw new TypeError();
            }
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
