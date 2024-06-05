let countdownTimer;
let timeleft = 179; // round duration 3 minutes
const updateInterval = 1000;
let isRunning = false;

function startCountdown() {
    countdownTimer = setInterval(updateTimer, updateInterval);
    document.getElementById("buttonImage").src = "../../../img/play-button.png";
}

function pauseCountdown() {
    clearInterval(countdownTimer);
    document.getElementById("buttonImage").src = "../../../img/pause-button.png";
}

function resetCountdown() {
    clearInterval(countdownTimer);
    timeleft = 180;
    updateTimer();
    document.getElementById("buttonImage").src = "../../../img/play-button.png";
    isRunning = false;
}

function toggleCountdown() {
    if (isRunning) {
        pauseCountdown();
        isRunning = false;
    } else {
        startCountdown();
        isRunning = true;
    }
}

function updateTimer() {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;
    const progressPercentage = (timeleft / 180) * 100;
    document.getElementById("pageBeginCountdownText").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("progressBar").style.width = progressPercentage + "%";
    timeleft--;

    if (timeleft < 0) {
        clearInterval(countdownTimer);
    }
}