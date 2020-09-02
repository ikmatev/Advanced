function solve() {
    class Pet{
        constructor(owner, name, comments) {
            this.owner = owner;
            this.name = name;
            this.comments = comments ? comments : [];
        }
        addComment(comment){
            let commentExist = this.comments.findIndex( x => x === comment);
            if (commentExist !== -1) {
                throw new Error('This comment is already added!')
            }
            this.comments.push(comment);
            return 'Comment is added.'
        }
        feed(){
            return this.name + ' is fed';
        }
        toString(){
            let result = '';
            if (this.comments.length > 0) {
                result += '\nSpecial requirements: '
                result += this.comments.join(', ');
            }
            return `Here is ${this.owner}'s pet ${this.name}.` + result;
        }
    }
    class Cat extends Pet{
        constructor (owner, name, insideHabits, scratching ){
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }
        feed(){
            return super.feed() + ", happy and purring.";
        }
        toString(){
            return super.toString() + `\nMain information:\n${ this.name } is a cat with ${this.insideHabits}${this.scratching? ', but beware of scratches.' : ''}`;
        }
    }
    class Dog extends Pet{
        constructor (owner, name , runningNeeds, trainability){
            super(owner , name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }
        feed(){
            return super.feed() + ', happy and wagging tail.'
        }
        toString(){
            return super.toString() + `\nMain information:\n${ this.name } is a dog with need of ${ this.runningNeeds }km running every day and ${ this.trainability } trainability.`
        }
    }
    return {
        Pet,
        Cat,
        Dog
    }
}
