function pressHouse(params) {
    class Article{
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString(){
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }
    class ShortReports extends Article{
        constructor(title, content, originalResearches, comments) {
            if (content.length > 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }
            super(title, content);
            if (originalResearches.title === undefined || originalResearches.author === undefined) {
                throw new Error('The original research should have author and title.');           
            }
            this.originalResearches = originalResearches;
            this.comments = comments ? comments : [];
        }
        addComment(comment){
            this.comments.push(comment);
            return `The comment is added.`;
        }
        toString(){
            let commentsStr = '';
            if (this.comments.length > 0) {
                commentsStr += `\nComments:\n`;
                commentsStr += this.comments.join('\n');
            }
            let test = super.toString();
            return  test + `\nOriginal Research: ${this.originalResearches.title} by ${ this.originalResearches.author }` + commentsStr;
        }
    }
    class BookReview extends Article{
        constructor (title, content, book, clients){
            super(title, content);
            this.book = book;
            this.clients = clients ? clients : [];
        }
        addClient(name, description){
            let hasClient = this.clients.filter( cl => cl.clientName === name);
            if (hasClient.length > 0) {
                throw new Error('This client has already ordered this review.');
            }
            let client = {
                clientName: name,
                orderDescription: description,
            }
            this.clients.push(client)
            return `${name} has ordered a review for ${this.book.name}`;
        }
        toString(){
            let orderStr = '';
            if (this.clients.length > 0) {
                orderStr += `\nOrders:`;
                this.clients.forEach( el => {
                    orderStr += `\n${el.clientName} - ${el.orderDescription}`
                });
            }
            return super.toString() + `\nBook: ${ this.book.name }` + orderStr;
        }
    }
    return {
        Article,
        BookReview,
        ShortReports
    }
}