(function(){

    /**
     * Declare vars
     */
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



    window.addEventListener("load",() => {
        body.classList.add('page-loaded'); //hides overlay and reveals timer 
    });
})();