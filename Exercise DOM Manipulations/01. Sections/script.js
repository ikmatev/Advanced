function create(words) {
   const content = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.innerText = words[i];
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div);
   }

   content.addEventListener('click',getHiddenPar);

   function getHiddenPar(e){
      e.target.children[0].removeAttribute('style');
   }
}