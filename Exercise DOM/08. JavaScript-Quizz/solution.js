function solve() {
  let currentNum = 0;
  let trueAnswers = 0;
  let quizAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']

  let section = document.getElementsByTagName('section'); 
  let buttons = document.getElementsByClassName('answer-text');
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function(){
          section[currentNum].style.display = 'none';
          currentNum++;
          checkAnswers(this.innerText);
          if (currentNum === 3) {
            let result = document.querySelector('li > h1')
            document.getElementById('results').style.display = 'block';
            if (trueAnswers === 3) {
              result.innerHTML = 'You are recognized as top JavaScript fan!';
            }else{
              result.innerHTML = `You have ${trueAnswers} right answers`
            }
          }else{
            section[currentNum].style.display = 'block';
          }
      })    
  }
  function checkAnswers(answer){
    if (quizAnswers.includes(answer)) {
      trueAnswers++;
    }
  }
}
