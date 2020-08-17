function solve() {
   const player1Cards = document.getElementById('player1Div');
   const player2Cards = document.getElementById('player2Div');
   const player1Result = document.querySelectorAll('#result span')[0];
   const player2Result = document.querySelectorAll('#result span')[2];
   const history = document.getElementById('history');

   player1Cards.addEventListener('click', getCards);
   player2Cards.addEventListener('click',getCards);

   function checkWinner(player1, player2){
      history.textContent += `[${player1.textContent} vs ${player2.textContent}] `
      let player1card = Array.from(player1Cards.children).filter( a => a.name === player1.textContent)[0];
      let player2card = Array.from(player2Cards.children).filter( a => a.name === player2.textContent)[0];

      if (+player1.textContent > +player2.textContent) {
         player1card.style.border = '2px solid green';   
         player2card.style.border = '2px solid red';                                                        
      }else{
         player1card.style.border = '2px solid red';   
         player2card.style.border = '2px solid green  ';   
      }
      player1.textContent = null;
      player2.textContent = null;

   }

   function getCards(e){
      if (e.target.localName === 'img') {
         e.target.src = 'images/whiteCard.jpg';
         if (e.target.parentElement.id === 'player1Div') {
            if (!player1Result.textContent) {
               player1Result.textContent = e.target.name;
               if (player2Result.textContent) {
                  checkWinner(player1Result, player2Result)
               }
            }
         }else{
            if (!player2Result.textContent) {
               player2Result.textContent = e.target.name;
               if (player1Result.textContent) {
                  checkWinner(player1Result, player2Result)
               }
            }
         }
      }
   }
}