function solve(){
    let obj = {
        selector1: null,
        selector2: null,
        resultSelector: null,
        init(sel1, sel2, resultSel){
            this.selector1 = document.querySelector(sel1);
            this.selector2 = document.querySelector(sel2);
            this.resultSelector = document.querySelector(resultSel);
        },
        add() {
            this.resultSelector.value = +this.selector1.value + +this.selector2.value;
        },
        subtract() {
            this.resultSelector.value = +this.selector1.value - +this.selector2.value;
        }
    }
    return obj;
}