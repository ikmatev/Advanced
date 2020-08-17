function attachEventsListeners() {
    let main = document.getElementsByTagName('main');
    let inputs = document.querySelectorAll('input[type="text"]')
    main[0].addEventListener('click', btnClick)
    function btnClick(e){
        if (e.target.attributes.type) {
            if (e.target.attributes.type.value === 'button') {
                const otherChild = e.target.previousElementSibling.value;
                if (otherChild && !isNaN(otherChild)) {
                    let time = calcTime(e.target.id, +otherChild);
                    let keys = Object.keys(time);
                    keys.forEach( (x, i) => inputs[i].value = time[x]);
                }
            }
        }
    }
    function calcTime(type, num){
        let timeObj = {
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        };
        switch (type) {
            case 'daysBtn':
                timeObj.days = num;
                timeObj.hours = num * 24;
                timeObj.minutes = num * 1440;
                timeObj.seconds = num * 86400 
                break;
        
            case 'hoursBtn':
                timeObj.days = num / 24;
                timeObj.hours = num;
                timeObj.minutes = num * 60;
                timeObj.seconds =  num * 3600;
                break;

            case 'minutesBtn':
                timeObj.days = num / 1440;
                timeObj.hours = num / 60;
                timeObj.minutes = num;
                timeObj.seconds =  num * 60;
                break;  

            case 'secondsBtn':
                timeObj.days = num / 86400;
                timeObj.hours = num / 3600;
                timeObj.minutes = num / 60;
                timeObj.seconds =  num;
                break;
        }
        return timeObj;
    }
}