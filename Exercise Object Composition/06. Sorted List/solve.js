function solve(){
    let obj = {
        list:[],
        add: function(el){
           this.list.push(el);
           this.list.sort((a, b) => a - b );
           this.size++;
        },
        remove: function(index){
            if (this.list.length - 1 >= index && index >= 0 ) {
                this.list.splice(index,1);
                this.size--;
            }
        },
        get: function (index){
            if (this.list.length - 1 >= index && index >= 0 ) {
                return this.list[index];
            }
        },
        size: 0
    
    };
    return obj;
}

