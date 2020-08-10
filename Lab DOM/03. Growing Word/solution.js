function growingWord() {
  let colors = {
      blue: 'green',
      green: 'red',
      red: 'blue'
  }
  let text = document.querySelector('#exercise p');
  if (!text.hasAttribute('style')) {
      text.setAttribute('style', `color:blue; font-size:2px`)
  }else{
      let currentSize = text.style['font-size'];
      let currentColor = text.style['color'];
      let px = Number(currentSize.substring(0, currentSize.length - 2));
      text.style['font-size'] = `${px * 2}px`;
      text.style['color'] = colors[currentColor];
  }
}