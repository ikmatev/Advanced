(function game(){
    const gameStartEl = document.getElementById('game-start');
    const gameAreaEl = document.getElementById('game-area');
    const gameScoreEl = document.getElementById('points');
    const gameOverEl = document.getElementById('game-over');
    let bugs;
    let clouds;
    let wizardEl;
    let fireBallsEl;

    function createWizard(){
        let wizard = document.createElement('div');
        wizard.style.left = '200px';
        wizard.style.top = '200px';
        wizard.setAttribute('id', 'wizard');
        gameAreaEl.appendChild(wizard);
        wizardEl = document.getElementById('wizard');
    }

    function createFireBall() {
        let fireBall = document.createElement('div')
        fireBall.classList.add('fire-ball');
        fireBall.style.top = wizardEl.style.top;
        fireBall.style.left = wizardEl.style.left;
        gameAreaEl.appendChild(fireBall);
    }
    function createCloud(timestamp) {
        if (timestamp - utils.lastCloud > utils.cloudInterval) {
            let cloud = document.createElement('div')
            cloud.classList.add('cloud')
            cloud.style.top = numberToPX(createRandomNumBetweenTwo(0, gameAreaEl.offsetHeight - 200));
            cloud.style.left = numberToPX(gameAreaEl.offsetWidth - 200);
            gameAreaEl.appendChild(cloud);
            utils.lastCloud = timestamp;
        }
    }
    function createBug(timestamp) {
        if (timestamp - utils.lastBug > utils.bugInterval) {
            let bug = document.createElement('div')
            bug.classList.add('bug')
            bug.style.top = numberToPX(createRandomNumBetweenTwo(0, gameAreaEl.offsetHeight - 60));
            bug.style.left = numberToPX(gameAreaEl.offsetWidth - 60);
            gameAreaEl.appendChild(bug);
            utils.lastBug = timestamp;
        }
    }

    function gameOver() {
        newGame();
        gameOverEl.classList.remove('hidden');
        gameStartEl.classList.remove('hidden');
        gameScoreEl.innerText = 0;
        utils.isGameActive = true;
        window.cancelAnimationFrame();
    }

    function newGame() {
        bugs.forEach((x, i) => bugs[i].remove());
        clouds.forEach((x, i) => clouds[i].remove());
        fireBallsEl.forEach((x, i) => fireBallsEl[i].remove());
        wizardEl.remove();
    }

    gameStartEl.addEventListener('click', function gameStart(e){
        gameStartEl.classList.add('hidden');
        gameOverEl.classList.add('hidden');
        createWizard();
        window.requestAnimationFrame(gameLoop)
    })
    let keys  = new Set();
    let utils = {
        isGameActive: true,
        bugSpeed: 3,
        cloudSpeed: 2,
        gameSpeed: 2,
        fireballSpeed : 3,
        wizardSpeed: 5,
        lastFireBall: 0,
        lastCloud: 0,
        lastBug: 0,
        fireInterval: 500,
        cloudInterval: 2000,
        bugInterval: 500,
    }
    function numberToPX(num){
        return num + 'px';
    }
    function pxToNumber(num){
        return Number(num.replace('px',''));
    }
    function createRandomNumBetweenTwo(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
    function isCollusion(el1, el2) {
        let el1Rect = el1.getBoundingClientRect();
        let el2Rect = el2.getBoundingClientRect();
        return !(el1Rect.top > el2Rect.bottom ||
            el1Rect.bottom < el2Rect.top ||
            el1Rect.right < el2Rect.left ||
            el1Rect.left > el2Rect.right
            )
    }

    document.addEventListener('keydown', keyDown );
    document.addEventListener('keyup', keyUp );

    function keyDown(e) {
        keys[e.code] = true;
    }
    function keyUp(e){
            keys[e.code] = false;
    }

    function countScore(){
        gameScoreEl.innerText = Number(gameScoreEl.innerText) + 1;
    }

    function gameLoop(timestamp) {
        if (!utils.isGameActive) {
            gameOver();
        }
        createCloud(timestamp);
        cloudProcessor();
        createBug(timestamp);
        bugProcessor();
        countScore();
        gravityProcessor();
        buttonProcessor(timestamp);
        fireBallProcessor();
        window.requestAnimationFrame(gameLoop);

    }
    function buttonProcessor(timestamp){
        if (keys.ArrowUp) {
            if (pxToNumber(wizardEl.style.top) < 0) { return; }
            let currentPos = pxToNumber(wizardEl.style.top);
            wizardEl.style.top = numberToPX(currentPos - utils.wizardSpeed);
       }
       if (keys.ArrowDown){
            if (pxToNumber(wizardEl.style.top) > gameAreaEl.offsetHeight - wizardEl.offsetHeight) { return; }
            let currentPos = pxToNumber(wizardEl.style.top);
            wizardEl.style.top = numberToPX(currentPos + utils.wizardSpeed);
       }
       if(keys.ArrowLeft){
            if (pxToNumber(wizardEl.style.left) < 0) { return; }
            let currentPos = pxToNumber(wizardEl.style.left);
            wizardEl.style.left = numberToPX(currentPos - utils.wizardSpeed);
       }
       if(keys.ArrowRight){
            if (pxToNumber(wizardEl.style.left) > gameAreaEl.offsetWidth - wizardEl.offsetWidth) { return; }
            let currentPos = pxToNumber(wizardEl.style.left);
            wizardEl.style.left = numberToPX(currentPos + utils.wizardSpeed);
        }
        if (keys.Space) {
            wizardEl.id = 'wizard-fire';
            if (timestamp - utils.lastFireBall > utils.fireInterval) {
                createFireBall();
                utils.lastFireBall = Math.floor(timestamp);
            }
        }else {
                wizardEl.id = 'wizard';
        }
    }
    function gravityProcessor() {
        if (pxToNumber(wizardEl.style.top) < gameAreaEl.offsetHeight - wizardEl.offsetHeight) {
            let currentPos = pxToNumber(wizardEl.style.top);
            wizardEl.style.top = numberToPX(currentPos + utils.gameSpeed);
        }
    }

    function fireBallProcessor() {
        fireBallsEl = Array.from(document.querySelectorAll('.fire-ball'));
        fireBallsEl.forEach((x, i )=> {
            if (pxToNumber(x.style.left) >= gameAreaEl.offsetWidth - 40) {
                fireBallsEl[i].remove();
            }else{
                x.style.left = numberToPX(pxToNumber(x.style.left) + utils.fireballSpeed);
                bugs.forEach( (y, index) => {
                    if (isCollusion(x, y)) {
                        fireBallsEl[i].remove();
                        bugs[index].remove();
                        gameScoreEl.innerText = +gameScoreEl.innerText + 2000;
                    }
                })
            }
        })
    }
    function cloudProcessor() {
        clouds = Array.from(document.querySelectorAll('.cloud'));
        clouds.forEach((x, i )=> {
            if (pxToNumber(x.style.left) <= 0) {
                clouds[i].remove();
            }else{
                x.style.left = numberToPX(pxToNumber(x.style.left) - utils.cloudSpeed)
            }
        })
    }
    function bugProcessor() {
        bugs = Array.from(document.querySelectorAll('.bug'));
        bugs.forEach((x, i )=> {
            if (pxToNumber(x.style.left) <= 0) {
                bugs[i].remove();
            }else{
                x.style.left = numberToPX(pxToNumber(x.style.left) - utils.bugSpeed);
                if (isCollusion(x, wizardEl)) {
                    utils.isGameActive = false;
                }
            }
        })
    }
})()