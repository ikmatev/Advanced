class VeterinaryClinic{
    constructor (clinicName, capacity){
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }
    addWorkload(){
        this.currentWorkload += 1;
    }
    reduceWorkLoad(){
        this.currentWorkload -= 1;
    }

    hasMoreWorkLoad(){
        if (this.capacity - 1 - this.currentWorkload < 0) {
            return false;
        }
        return true;
    }
    getClientIndex(name){
        return this.clients.findIndex( x => x.ownerName === name );
    }
    getPetIndex(clientIndex, petName){
        return this.clients[clientIndex].pets.findIndex(x => x.petName === petName);
    }
    newCustomer(ownerName, petName, kind, procedures){
        if (!this.hasMoreWorkLoad()) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }
        let petObj = {
            petName: petName,
            kind: kind,
            procedures: procedures,
        }
        let clientObj = {
            ownerName: ownerName,
            pets:[],
        }
        let clientIndex = this.getClientIndex(ownerName)

        if (clientIndex !== -1) {
            let currentClient = this.clients[clientIndex];
            let petIndex = this.getPetIndex(clientIndex, petName);
            if (petIndex !== -1 && currentClient.pets[petIndex].procedures.length > 0) {
                throw new Error(`This pet is already registered under ${ currentClient.ownerName } name! ${ currentClient.pets[petIndex].petName } is on our lists, waiting for ${ currentClient.pets[petIndex].procedures.join(', ') }.`)      
            }else{
                currentClient.pets.push(petObj);
                this.addWorkload();
                return `Welcome ${ petObj.petName }!`;
            }

        }else{
            clientObj.pets.push(petObj);
            this.clients.push(clientObj);
            this.addWorkload();
            return `Welcome ${ petObj.petName }!`;
        }
    }
    onLeaving (ownerName, petName) {
        let clientIndex = this.getClientIndex(ownerName);
        if (clientIndex === -1) {
            throw new Error('Sorry, there is no such client!');
        }
        let petIndex = this.getPetIndex(clientIndex, petName);
        if (petIndex === -1 || this.clients[clientIndex].pets[petIndex].procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${ petName }!`);
        }
        let currentClient = this.clients[clientIndex];
        this.totalProfit += currentClient.pets[petIndex].procedures.length * 500;
        this.reduceWorkLoad();
        currentClient.pets[petIndex].procedures = [];
        return `Goodbye ${ petName }. Stay safe!`
    }
    toString(){
        let result = '';
        let percentCapacity = (this.currentWorkload / this.capacity) * 100 ;
            result += `${ this.clinicName } is ${ percentCapacity }% busy today!`;
            result += `\nTotal profit: ${ this.totalProfit.toFixed(2) }$`;
        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));
        this.clients.forEach( x => {
            result += `\n${ x.ownerName } with:`;
            x.pets.sort((a, b) => a.petName.localeCompare(b.petName));
            x.pets.forEach( y => {
                result += `\n---${ y.petName } - a ${ y.kind.toLowerCase() } that needs: ${y.procedures.join(', ')}`
            })
        })
        return result;   
    }
}
