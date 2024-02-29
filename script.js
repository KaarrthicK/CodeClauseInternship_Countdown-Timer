let timerInterval;
let targetDate;
let timeRemaining;
let countDownDate = new Date("Aug 15, 2024 00:00:00").getTime();

    timerInterval = setInterval(function(){
    targetDate = new Date().getTime();
    timeRemaining = countDownDate - targetDate;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = ("0"+days).slice(-3);
    document.getElementById('hours').innerHTML = ("0"+hours).slice(-2);
    document.getElementById('minutes').innerHTML = ("0"+minutes).slice(-2);
    document.getElementById('seconds').innerHTML = ("0"+seconds).slice(-2);

    if (timeRemaining < 0) {
      clearInterval(timerInterval);
      document.getElementById("countdown").innerText = "Your Time Arrived!";
    }
}, 1000);
