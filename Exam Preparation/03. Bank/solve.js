class Bank{
    #name;
    constructor(name, allCustomers = []){
        this.#name = name;
        this.allCustomers = allCustomers;
    }
    newCustomer(customer){
        let newPattern = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            personalId: customer.personalId,
        }
        if (this.checkCustomerID(customer.personalId) !== false) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(newPattern);
        return newPattern;
    }
    depositMoney(personalId, amount){
        let customerIndex = this.checkCustomerID(personalId);
        if (customerIndex === false) {
            throw new Error(`We have no customer with this ID!`)
        }
        if (this.allCustomers[customerIndex]['totalMoney']) {
            this.allCustomers[customerIndex]['totalMoney'] += amount;
        }else{
            this.allCustomers[customerIndex]['totalMoney'] = amount;
        }
        this.addTransaction(customerIndex, 'deposit', amount);
        return this.allCustomers[customerIndex]['totalMoney'] + '$';
    }
    withdrawMoney(personalId, amount){
        let customerIndex = this.checkCustomerID(personalId);
        if (customerIndex === false) {
            throw new Error(`We have no customer with this ID!`)
        }
        if (!this.allCustomers[customerIndex]['totalMoney'] || this.allCustomers[customerIndex]['totalMoney'] - amount < 0) {
            throw new Error(`${this.allCustomers[customerIndex].firstName} ${this.allCustomers[customerIndex].lastName} does not have enough money to withdraw that amount!`)
        }else{
            this.allCustomers[customerIndex]['totalMoney'] -= amount;
        }
        this.addTransaction(customerIndex, 'withdraw', amount);
        return this.allCustomers[customerIndex]['totalMoney'] + '$';
    }
    customerInfo (personalId){
        let customerIndex = this.checkCustomerID(personalId);
        let result = '';
        if (customerIndex === false) {
            throw new Error('We have no customer with this ID!');
        }
        result += 'Bank name: ' + this.#name;
        result += '\nCustomer name: ' + this.allCustomers[customerIndex].firstName + ' ' + this.allCustomers[customerIndex].lastName;
        result += '\nCustomer ID: ' + this.allCustomers[customerIndex].personalId;
        result += '\nTotal Money: ' + this.allCustomers[customerIndex].totalMoney + '$';
        if (this.allCustomers[customerIndex].transaction) {
            result += '\nTransactions:';
            this.allCustomers[customerIndex].transaction.forEach(tr => {
                result += `\n${tr.number}. ${tr.names[0]} ${tr.names[1]} ${tr.type === 'deposit'? 'made deposit of': 'withdrew'} ${tr.amount}$!`;
            });
        }
        return result;
    }
    checkCustomerID(id){
        let index = this.allCustomers.findIndex( el => el.personalId === id);
        if ( index !== -1 ) {
            return index;
        }
        return false;   
    }
    addTransaction(index, type, amount){
        if (!this.allCustomers[index]['transaction']) {
            this.allCustomers[index]['transaction'] = [{
                number: 1,
                names:[this.allCustomers[index].firstName,  this.allCustomers[index].lastName],
                type: type,
                amount: amount,
            }];
        }else{
            let lastNum = this.allCustomers[index]['transaction'][0].number;
            if (type === 'withdraw') {
                this.allCustomers[index]['transaction'].unshift({
                    number: lastNum + 1,
                    names:[this.allCustomers[index].firstName,  this.allCustomers[index].lastName],
                    type: type,
                    amount: amount,
                })
            }else{
                this.allCustomers[index]['transaction'].unshift({
                    number: lastNum + 1,
                    names:[this.allCustomers[index].firstName,  this.allCustomers[index].lastName],
                    type: type,
                    amount: amount,
                })
            }
        }
    }
}




