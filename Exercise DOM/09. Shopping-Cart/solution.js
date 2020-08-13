function solve() {
   let addbuttons = document.getElementsByClassName('add-product');
   let prices = document.getElementsByClassName('product-line-price');
   let names = document.getElementsByClassName('product-title');
   let result = document.getElementsByTagName('textarea');
   let checkoutButton = document.getElementsByClassName('checkout');
   let totalPrice = 0;
   let orderedProducts = new Set();
   let checkoutBool = true;

   for (let i = 0; i < addbuttons.length; i++) {      
      addbuttons[i].addEventListener('click', () => addProducts(i));
   }
   checkoutButton[0].addEventListener('click', () => checkout());

   function checkout(){
      if (checkoutBool) {
         result[0].innerHTML += `You bought ${Array.from(orderedProducts).join(', ')} for ${totalPrice.toFixed(2)}.`
         checkoutBool = false;
         removeListners();       
      }
   }
   function addProducts(index){
      if (checkoutBool) { 
         result[0].innerHTML += `Added ${names[index].innerHTML} for ${prices[index].innerHTML} to the cart.\n`;
         totalPrice += Number(prices[index].innerHTML);
         orderedProducts.add(names[index].innerHTML);
      }
   }
   function removeListners(){
      checkoutButton[0].removeEventListener('click', checkout());
      for (let i = 0; i < addbuttons.length; i++) {
         addbuttons[i].removeEventListener('click', () => addProducts(i));       
      }
   }
}
