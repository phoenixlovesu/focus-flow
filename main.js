(function(){

    const body = document.body;
    const workDurationInput = document.getElementById('work-duration');
    const restDurationInput = document.getElementById('rest-duration');
    const timerTime = document.getElementById('timer-time');

    let workDuration = parseInt(workDurationInput.value) * 60;
    let restDuration = parseInt(restDurationInput.value) * 60;
    letRemainingTime = workDuration;
    let isPaused = true;
    let isWorking = true;
    let intervalId;


    /**
     * Page loaded
     */
    window.addEventListener("load",() => {
        body.classList.add('page-loaded'); //hides overlay and reveals timer 
    });


    /**
     * Start button
     */
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', ()=> {
        isPaused = false;

        body.classList.add('timer-running');

        if(isWorking) {
            body.classList.remove('timer-paused');
        }
        else {
            body.classList.add('rest-mode');
            body.classList.remove('timer-paused');
        }

        if(intervalId) {
            intervalId = setInterval(updateTimer, 1000);
        }
    })

})();