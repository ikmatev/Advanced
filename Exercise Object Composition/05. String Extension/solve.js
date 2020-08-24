(function (){
    String.prototype.ensureStart = function(str){
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function(str){
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }
    String.prototype.truncate = function(num){
        let thisLenght = this.length;
        if (num < thisLenght) {
            let newStr = this.slice(0, num).trim();
            let splitedArr = newStr.split(' ');
            if (splitedArr.length > 1) {
                splitedArr.pop();
                return splitedArr.join(' ') + '...';
            }
            if (splitedArr[0].length >= 3) {
                splitedArr[0] = splitedArr[0].slice(0, num - 3);
                return splitedArr[0] + '...'
            }else{
                return '.'.repeat(num);
            }
        }
        return this.toString()
    }
    String.prototype.isEmpty = function(){
        let result = false;
        if (this.length === 0) {
            result = true
        }
        return result;
    }
    Object.defineProperty(String, 'format', {
        value: function(str, ...params){
            let result = str;
            let arrParm = [...params];
            let matched = str.match(/\{([0-9])\}/g);
            for (let i = 0; i < arrParm.length; i++) {
                if (!matched[i]) {
                    break;
                }
               let num =  matched[i].match(/[0-9]/g);
               result = result.replace(matched[i],arrParm[num[0]]);            
            }
            return result;
        } 
    })
})();
