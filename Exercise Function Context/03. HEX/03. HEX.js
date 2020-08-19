class Hex{
    constructor(val){
        this.value = val;
    }
    valueOf(){ return this.value; }
    toString(){ return '0x' + this.value.toString(16).toUpperCase();}
    plus(val){ return new Hex (this.value + val) }
    minus(val){ return new Hex (this.value - val) }
    parse(str){ return parseInt(str, 16) }
}