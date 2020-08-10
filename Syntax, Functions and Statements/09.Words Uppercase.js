function solve(arr) {
    let regexPatter = /[A-Za-z0-9]+/g;
    let matchedWords = arr.match(regexPatter).map( x => x.toUpperCase());
    console.log(matchedWords.join(', '));
}
solve('hello 234');