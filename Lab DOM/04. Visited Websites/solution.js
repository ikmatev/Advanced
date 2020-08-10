function solve() {
  let anchors = document.getElementsByTagName('a');
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", () => editHits(i)) 
  }
  function editHits(index){
    let paragraphs = document.getElementsByTagName('p');
    let currentClicks = paragraphs[index].innerHTML.split(' ');
    paragraphs[index].innerHTML = `visited ${Number(currentClicks[1]) + 1} times`
  }
}