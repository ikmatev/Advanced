function attachGradientEvents() {
    const block = document.getElementById('gradient');
    const result = document.getElementById('result');
    
    block.addEventListener('mousemove', checkColor);
    block.addEventListener('mouseout', removePercent);

    function checkColor(e){
        let offset = e.offsetX;
        let width = e.target.clientWidth -1;
        result.innerText = Math.trunc(offset / width * 100) + '%';
    }
    function removePercent(e){
        result.innerText = null;
    }
}