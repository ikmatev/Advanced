function solve() {
   const tDs = document.querySelectorAll('tbody td');
   const searchTxt = document.getElementById('searchField');
   const searchBtn = document.getElementById('searchBtn');

   searchBtn.addEventListener('click', searchAndMatch);

   function searchAndMatch(e){
      if (searchTxt.value) {
         Array.from(tDs).forEach( a => {
            if(a.parentElement.classList.contains('select')){
               a.parentElement.classList.remove('select')
            }
         });
         Array.from(tDs).forEach( a => {
            if(a.innerText.includes(searchTxt.value)){
               a.parentElement.setAttribute('class', 'select')
            }
         });
         searchTxt.value = null;  
      }
   }
}