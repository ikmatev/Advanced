function solve() {
    class Stringer{
        constructor(str, len){
            this.innerString  = str;
            this.innerLength = len;
        }
        increase(param){
            this.innerLength += param;
        }
        decrease(param){
            this.innerLength -= param;
            if (this.innerLength < 0) {
                this.innerLength = 0;
            }
        }
        toString(){
            if (this.innerLength === 0) {
                return '...';
            }
            if (this.innerString.length > this.innerLength) {
                return this.innerString.slice(0, this.innerLength) + '...'
            }
            return this.innerString;
        }

    }
}
solve();