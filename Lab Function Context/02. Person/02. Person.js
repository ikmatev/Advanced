function Person(fName, lName){
    this.firstName = fName;
    this.lastName =lName;

    Object.defineProperty(this,'fullName', {
        get() { return this.firstName + ' ' + this.lastName},
        set(fullName) {
            const names = fullName.split(' ');
            if (names.length === 2) {
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    })
}
let person = new Person("Albert", "Simpson");
console.log(person.fullName);//Albert Simpson
person.firstName = "Simon";
console.log(person.fullName);//Simon Simpson
person.fullName = "Peter";
console.log(person.firstName) // Simon
console.log(person.lastName) // Simpson


