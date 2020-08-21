function solution(command){
    if (!this.balance) {
        this.balance = 0;     
    }
    switch (command) {
        case 'upvote':
            this.upvotes++;
            this.balance++;
            updateStatus.call(this);
            break;
        case 'downvote':
            this.downvotes++;
            this.balance--;
            updateStatus.call(this);
            break;
        case 'score':
            return calcScore.call(this);
    }
    function updateStatus(){
        let positivePercent =  this.upvotes / (this.upvotes + this.downvotes);
        if (this.upvotes + this.downvotes < 10) { return this.rating = 'new'}
        if (positivePercent > 0.66) {return this.rating = 'hot'; }
        if(positivePercent >= 0.50 && this.upvotes + this.downvotes > 100 ){ return this.rating = 'controversial'}
        if (positivePercent < 0.50) { return this.rating = 'unpopular'}
        return this.rating = 'new'
    }
    function calcScore(){
        if (!this.balance || this.balance !== this.upvotes - this.downvotes) {
            this.balance = this.upvotes - this.downvotes;
            updateStatus.call(this);
        }
        if (!this.rating) {
            updateStatus.call(this);
        }
        let result = [
            this.upvotes,
            this.downvotes,
            this.balance,
            this.rating
        ]
        if (this.upvotes + this.downvotes > 50) {
            let numToAdd = Math.ceil(Math.max(this.upvotes, this.downvotes) * 25 / 100);
            result[0] += numToAdd;
            result[1] += numToAdd;
        }
        return result;
    }
}
var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

// Under border case
var answer = solution.call(forumPost, 'score');
//var expected = [4, 5, -1, 'new'];
//compareScore(expected, answer);

// Past border case
solution.call(forumPost, 'downvote');
answer = solution.call(forumPost, 'score');
// expected = [4, 6, -2, 'unpopular'];
// compareScore(expected, answer);

solution.call(forumPost, 'upvote');
solution.call(forumPost, 'upvote');
answer = solution.call(forumPost, 'score');
// expected = [6, 6, 0, 'new'];
// compareScore(expected, answer);

// // 38 Upvotes
for (let i = 0; i < 38; i++) {
    solution.call(forumPost, 'upvote');
}
answer = solution.call(forumPost, 'score');
// expected = [44, 6, 38, 'hot'];
// compareScore(expected, answer);

// // Past obfuscation threshold
solution.call(forumPost, 'downvote');
answer = solution.call(forumPost, 'score');
// expected = [55, 18, 37, 'hot'];
// compareScore(expected, answer);

// expect(forumPost.upvotes).to.equal(44, 'Actual upvotes were manipulated');
// expect(forumPost.downvotes).to.equal(7, 'Actual downvotes were manipulated');

// // Bellow hot threshold
forumPost.upvotes = 132;
forumPost.downvotes = 68;

answer = solution.call(forumPost, 'score');
// expected = [165, 101, 64, 'controversial'];
// compareScore(expected, answer);

// // Past hot threshold
forumPost.upvotes = 133;

// answer = result.call(forumPost, 'score');
// expected = [167, 102, 65, 'hot'];
// compareScore(expected, answer);

// expect(forumPost.upvotes).to.equal(133, 'Actual upvotes were manipulated');
// expect(forumPost.downvotes).to.equal(68, 'Actual downvotes were manipulated');

// function compareScore(expected, answer) {
//     expect(expected[0]).to.equal(answer[0], 'Incorrect number of upvotes');
//     expect(expected[1]).to.equal(answer[1], 'Incorrect number of downvotes');
//     expect(expected[2]).to.equal(answer[2], 'Incorrect score');
//     expect(expected[3]).to.equal(answer[3], 'Incorrect rating');
// }
