function solve(arr, sortBy) {
    class Ticket{
        constructor(destinationName, price, status){
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }
    let arrOfTickets = [];
    while (arr.length > 0) {
        let [destination, price, availability] = arr.shift().split('|');
        price = Number(price);
        arrOfTickets.push(new Ticket(destination, price, availability));
    }
    if (sortBy === 'price') {
        arrOfTickets.sort((a, b) => a[sortBy] - b[sortBy]); 
    }else{
        arrOfTickets.sort((a, b) => a[sortBy].localeCompare(b[sortBy])); 
    }
    return arrOfTickets;
}
solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|2.20|departed'],
'price'
);