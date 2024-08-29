const clickButton = document.getElementById('click-button');
const displayMessage = document.getElementById('display-message');

clickButton.addEventListener('click', function() {
    displayMessage.style.visibility = "visible";
    setTimeout(function () {
        displayMessage.style.visibility = "hidden";
    }, 5000);
});

const timerButton = document.getElementById('timer-button');
const timerDiv = document.getElementById('timer-div');
let time = 0;
let playing = false;

timerButton.addEventListener('click', function() {
    if (playing === false) {playing = true;}
    else {playing = false;}
    console.log(playing);
});

setInterval(function() {
    if (playing === true) {
        console.log(time);
        time += 1;
        timerDiv.innerHTML = time;
    }
}, 1000);

