const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");

let userCount = 0;
let computerCount = 0;
let playerChoice;
let computerChoice;
let resultText = document.getElementById("result-text");
let computerImg = document.getElementById("computer-img");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        computerImg.style.backgroundImage = `url('${computerSelection}.png')`;
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        userCount++;
        userScore.innerHTML = userCount;
        computerImg.style.backgroundImage = `url('${computerSelection}.png')`;
        return "You win!";
    } else {
        computerCount++;
        computerScore.innerHTML = computerCount;
        computerImg.style.backgroundImage = `url('${computerSelection}.png')`;
        return "Rami wins!";
    }
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        playerChoice = button.id;
        computerChoice = computerPlay();
        resultText.textContent = playRound(playerChoice, computerChoice);
        document.getElementById("result").style.display = "block";
        if (userCount === 5) {
            alert("Congratulations! You won the game!");
            userCount = 0;
            computerCount = 0;
            userScore.innerHTML = userCount;
            computerScore.innerHTML = computerCount;
        } else if (computerCount === 5) {
            alert("Sorry, you lost the game. Better luck next time!");
            userCount = 0;
            computerCount = 0;
            userScore.innerHTML = userCount;
            computerScore.innerHTML = computerCount;
        }
    });
});

document.getElementById("play-again").addEventListener("click", function () {
    // Reset the game
    userCount = 0;
    computerCount = 0;
    playerChoice = null;
    computerChoice = null;
    resultText.innerHTML = "";
    computerImg.style.backgroundImage = "url('question-mark.png')";
    document.getElementById("result").style.display = "none";
    userScore.innerHTML = userCount;
    computerScore.innerHTML = computerCount;
});


document.getElementById("play-again").addEventListener("click", function () {
    // Reset the game
    playerChoice = null;
    computerChoice = null;
    resultText.innerHTML = "";
    computerImg.style.backgroundImage = "url('question-mark.png')";
    document.getElementById("result").style.display = "none";
});




