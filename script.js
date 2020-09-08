//Timer

var minutesElem = document.getElementById('timer-minutes');
var secondsElem = document.getElementById('timer-seconds');
var startElem = document.getElementById('timer-start');
var resetElem = document.getElementById('timer-reset');
var pauseElem = document.getElementById('timer-stop')

var initialMinutes = 2;
var initialSeconds = 0;
var seconds = initialSeconds;
var minutes = initialMinutes;
pauseElem.disabled = true;

startElem.addEventListener('click', function(){
    startElem.disabled = true;
    pauseElem.disabled = false;
    var timer = setInterval(function(){
        resetElem.addEventListener('click',function(){
            clearInterval(timer);
            minutesElem.innerText = initialMinutes;
            secondsElem.innerText = initialSeconds;
            startElem.disabled = false;
            pauseElem.disabled = true;
        })
        if(seconds == 0){
            if(minutes <= 0){
                return;
            }
            seconds = 59;
            minutes--;
            secondsElem.innerText = seconds;
            minutesElem.innerText = minutes;
        }
        else{
            seconds--;
            secondsElem.innerText = seconds;
            minutesElem.innerText = minutes;
        }
        pauseElem.addEventListener('click',function(){
            clearInterval(timer);
            startElem.disabled = false;
            pauseElem.disabled = true;
            minutesElem.innerText = minutes;
            secondsElem.innerText = seconds;
        })
    },1000)
})
