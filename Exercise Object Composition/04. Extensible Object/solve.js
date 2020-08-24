var template = {
    name: '',
    setName: function (newValue) {
        this.name = newValue;
    },
    getName: function () {
        return this.name;
    }
};
function solve(){
    let obj = {
        extend: function(template){
            for (const key in template) {
                if (typeof template[key] === 'function') {
                    Object.getPrototypeOf(this)[key] = template[key];
                }else{
                    this[key] = template[key];
                }
            }
        }
    }
    return obj
};