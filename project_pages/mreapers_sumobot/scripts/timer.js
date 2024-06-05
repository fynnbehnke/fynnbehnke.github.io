let countdownTimer;
let timeleft = 179; // round duration 3 minutes
const updateInterval = 1000;
let isRunning = false;

function startCountdown() {
    countdownTimer = setInterval(updateTimer, updateInterval);
    document.getElementById("buttonImage").src = "https://lh3.googleusercontent.com/drive-viewer/AKGpihbfkKqbG4rIH0NJoRxe-CmieVMz0HMYJdhmf_eL_RozatL1UaoRLfRz0usb_c8PGSgJSDZYUR8ZFxZLPbNfnvI8D7tD=s2560";
}

function pauseCountdown() {
    clearInterval(countdownTimer);
    document.getElementById("buttonImage").src = "https://lh3.googleusercontent.com/drive-viewer/AKGpihay6anqWh4vmrBuS0CNARYIcm5ipP0_X3o3EE-oVj6vx5-K_wB2ukUMdWJo_tthTL-RlAA0t0uMmLBLz8EERK8Pwp1mZA=s2560";
}

function resetCountdown() {
    clearInterval(countdownTimer);
    timeleft = 180;
    updateTimer();
    document.getElementById("buttonImage").src = "https://lh3.googleusercontent.com/drive-viewer/AKGpihay6anqWh4vmrBuS0CNARYIcm5ipP0_X3o3EE-oVj6vx5-K_wB2ukUMdWJo_tthTL-RlAA0t0uMmLBLz8EERK8Pwp1mZA=s2560";
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