   function solve(){
      const cells = document.querySelectorAll('tbody tr td');
      let currentMarked = null;

      for (let i = 0; i < cells.length; i++) {
         cells[i].addEventListener('click', changeBG)
      }
      function changeBG(e){
         if (this.parentNode.style.backgroundColor === '') {
            this.parentNode.style.backgroundColor = '#413f5e';
            if (currentMarked) {
               currentMarked.removeAttribute('style')
            }
            currentMarked = this.parentNode;
         }else{
            this.parentNode.removeAttribute('style');
            currentMarked = null;
         }
      }
   }
