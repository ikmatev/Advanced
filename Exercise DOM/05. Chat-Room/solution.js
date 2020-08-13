function solve() {
   document.getElementById('send').addEventListener('click', () => addMessege());

   function addMessege (){
      let input = document.getElementById('chat_input');
      if (input.value !== '') {
         let messegeDiv = document.getElementById('chat_messages')
         let messege = document.createElement('div');
             messege.setAttribute('class', 'message my-message');
             messege.innerHTML = input.value;
         messegeDiv.appendChild(messege)
      }
      input.value = null;
   }
}