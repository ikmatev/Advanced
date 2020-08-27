(function (){
    Array.prototype.last = function(){
        return this[this.length - 1];
    }
    Array.prototype.skip = function(num){
        return this.filter((el, i) => i > num - 1);
    }
    Array.prototype.take = function(num){
        return this.filter((el, i) => i <= num - 1);
    }
    Array.prototype.sum = function(){
        return this.reduce((acc, el) => acc + el, 0);
    }
    Array.prototype.average = function(){
        return this.reduce((acc, el) => acc + el, 0) / this.length;
    }
})();