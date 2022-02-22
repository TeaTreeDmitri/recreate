let oneMinute = 59;
let pomodoro = 24;
document.querySelector("#minutes").textContent = pomodoro;

function showtime() {
    document.querySelector("#seconds").textContent = oneMinute;
    oneMinute--;
    setTimeout(startTimer, 1000)
}

function startTimer() {
    if (oneMinute == 0) {
        pomodoro--
        document.querySelector("html").offsetHeight;
        document.querySelector("#minutes").textContent = pomodoro;
        showtime()
        oneMinute = 59;
    } else {
        showtime();
    }
    if (oneMinute < 10) {
        oneMinute = "0" + oneMinute;
    }
}

showtime()