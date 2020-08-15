function stopwatch() {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const time = document.getElementById('time');
    let counter;

    let minutes = 0;
    let seconds = 0;

    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop)

    function stop(){
        stopBtn.disabled = true;
        startBtn.disabled = false;
        clearInterval(counter);
    }

    function start(){
        minutes = 0;
        seconds = 0;
        time.innerText = '00:00';
        stopBtn.disabled = false;
        startBtn.disabled = true;
        counter = setInterval(function(){
            seconds++;
            if (seconds  === 60) { 
                minutes++;
                seconds = 0;
            }
            time.innerText = `${formatTime(minutes)}:${formatTime(seconds)}`;
        }, 1000)
    }
    
    function formatTime(val){
        let result = val;
        if (val < 10) {
            result = '0' + val;
        }
        return result;
    }
}