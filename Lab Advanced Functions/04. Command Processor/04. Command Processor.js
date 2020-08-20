function solution(){
    let obj = {
        str: '',
        append(string) { this.str += string },
        removeStart(num) { this.str = this.str.slice(num) },
        removeEnd(num) { this.str = this.str.slice(0, this.str.length - num) },
        print() { console.log(this.str); }
    }
    return obj;
}