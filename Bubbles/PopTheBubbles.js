const welcomePage = document.getElementById("welcomePage");
const gamePage = document.getElementById("gamePage");

const usernameInput = document.getElementById("usernameInput");
const playerName = document.getElementById("playerName");

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

const scoreDisplay = document.getElementById("scoreDisplay");
const timmerDisplay = document.getElementById("timerDisplay");

const bubbleContainer = document.getElementById("bubbleContainer");
const gameOver = document.getElementById("gameOver");



let score = 0;
let timeLeft = 30;

let bubbleInterval;
let timerInterval;



startButton.addEventListener("click", function(){

    let username = usernameInput.value.trim();

    if(username === "") {
        alert("Please enter a username!");
        return;
    }

    playerName.textContent = username;

    welcomePage.style.display = "none";
    gamePage.style.display = "block";

    startGame();
})

function startGame() {

    score = 0;
    timeLeft = 30;

    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;

    gameOver.style.display = "none";
    restartButton.style.display = "none";

    bubbleContainer.innerHTML = "";

    bubbleInterval = setInterval(createBubble, 700)


    timerInterval = setInterval (updateTimer, function() {

        timerLeft--;

        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

}