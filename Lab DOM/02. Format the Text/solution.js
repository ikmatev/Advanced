function solve() {
  let inputText = document.getElementById('input').innerHTML;
  let outPutArr = []
      inputText.split('. ').forEach((x, i) => {
        if (i % 3 === 0) {
          outPutArr.push(x + '. ')
        }else{
          outPutArr[outPutArr.length - 1] += x + '. ';
        }
      });
  outPutArr.forEach( x => {
    let output = document.getElementById('output');
    let createParagraph = document.createElement('p');
    createParagraph.appendChild(document.createTextNode(x));
    output.appendChild(createParagraph);
  })
}