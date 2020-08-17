function solve() {
    const tBody = document.getElementsByTagName('tbody');

    const genereteBtn = document.getElementsByTagName('button')[0];
    const buyBtn = document.getElementsByTagName('button')[1];

    const inputArea = document.getElementsByTagName('textarea')[0];
    const cartArea = document.getElementsByTagName('textarea')[1];

    genereteBtn.addEventListener('click',generateProducts);

    buyBtn.addEventListener('click',calcProducts);

    function calcProducts(e){
      const tRows = document.querySelectorAll('tbody > tr');

      let products = [];
      let total = 0;
      let averege = 0;
      for (let i = 0; i < tRows.length; i++) {
        if (tRows[i].children[4].children[0].checked) {
          products.push(tRows[i].children[1].children[0].textContent);
          total += Number(tRows[i].children[2].children[0].textContent);
          averege += Number(tRows[i].children[3].children[0].textContent);
        }
      }
      if (products.length > 0) {
        averege = averege / products.length;
        let result = `Bought furniture: ${products.join(', ')}\n`;
            result += `Total price: ${total.toFixed(2)}\n`;
            result += `Average decoration factor: ${averege}`;
        cartArea.value = result;
      }

    }
    
    function generateProducts(e){
      if (inputArea.value) {
        let arrOfObj = JSON.parse(inputArea.value);
        
        arrOfObj.forEach(a => {
              let newProductEl;
              let imgTD = document.createElement('td');
              let image = document.createElement('img');
                  image.src = a.img;
                  imgTD.appendChild(image);

              let nameTD = document.createElement('td');
              let name = document.createElement('p');
                  name.textContent = a.name;
                  nameTD.appendChild(name);

              let priceTD = document.createElement('td');
              let price = document.createElement('p');
                  price.textContent = a.price;
                  priceTD.appendChild(price);

              let decorFacTD = document.createElement('td');    
              let decorFac = document.createElement('p');
                  decorFac.textContent = a.decFactor;
                  decorFacTD.appendChild(decorFac);

              let inputTD = document.createElement('td');    
              let input = document.createElement('input');
                  input.setAttribute('type',"checkbox");
                  inputTD.appendChild(input);

              newProductEl = document.createElement('tr');
              newProductEl.appendChild(imgTD);
              newProductEl.appendChild(nameTD);
              newProductEl.appendChild(priceTD);
              newProductEl.appendChild(decorFacTD);
              newProductEl.appendChild(inputTD);
              tBody[0].appendChild(newProductEl);        
        });
      }
    }
}