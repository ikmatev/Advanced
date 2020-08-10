function solve() {
    class List{
        constructor(){
            this.list = [];
            this.size = this.list.length;
        }
        add(param){
            this.list.push(param);
            this.list.sort((a, b) => a - b);
            this.size++;
            return;
        }
        remove(index){
            if (this.list[index] !== undefined) {
                this.list.splice(index,1);
                this.list.sort((a, b) => a - b);
                this.size--;
            }
            return;
        }
        get(index){
            if (this.list[index] !== undefined) {
                return this.list[index];
            }
            return;
        }

    }
}
solve();