// app.js
// A ROCK-PAPER-SCISSORS game played in the console

// ========== GLOBAL VARIABLES ==========
let computerScore = 0;
let humanScore = 0;
let round = 0;

// ========== DOM ELEMENTS ==========

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const htmlHumanScore = document.querySelector("#human-score");
const htmlComputerScore = document.querySelector("#bot-score");
const results = document.querySelector("#game-result");
const htmlRound = document.querySelector("#round");

// ========== FUNCTIONS ==========

// Generates a random choice for the computer

function getComputerChoice() {
  // we Create an array for te available choices
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Plays a Round of paper rock scissors, Compares the result and updates the scores and the html
function playRound(humanSelection) {
  const computerSelection = getComputerChoice();
  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  if (humanSelection === computerSelection) {
    results.textContent = `A TIE both of you chose ${humanSelection}`;
  } else if (
    (humanSelection === "Rock" && computerSelection === "Scissors") ||
    (humanSelection === "Paper" && computerSelection === "Rock") ||
    (humanSelection === "Scissors" && computerSelection === "Paper")
  ) {
    results.textContent = `You WIN! ${humanSelection} beats ${computerSelection}`;
    humanScore++;
  } else {
    results.textContent = `You LOST! ${computerSelection} beats ${humanSelection}`;
    computerScore++;
  }
  round++;

  // We check if there is a winner
  if (humanScore === 5 || computerScore === 5) {
    declareWinner();
  }

  // we update the values in the DOM
  htmlRound.textContent = round;
  htmlHumanScore.textContent = humanScore;
  htmlComputerScore.textContent = computerScore;
}

// Declares a Winner after the player or the computer reaches 5 points
function declareWinner() {
  // Disable the buttons to prevent further play
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;

  // Announce the final result
  if (humanScore > computerScore) {
    results.textContent = `Game Over! You won the match ${humanScore} to ${computerScore}!`;
  } else if (computerScore > humanScore) {
    results.textContent = `Game Over! The computer won the match ${computerScore} to ${humanScore}!`;
  } else {
    results.textContent = `Game Over! It's a tie! ${humanScore} to ${computerScore}.`;
  }
}

// ========== EVENT LISTENERS ==========

rockButton.addEventListener("click", () => {
  playRound("Rock");
});

paperButton.addEventListener("click", () => {
  playRound("Paper");
});

scissorsButton.addEventListener("click", () => {
  playRound("Scissors");
});

// ========== STARTING VALUES ==========
// Load the Score Values to the Page
htmlHumanScore.textContent = humanScore;
htmlComputerScore.textContent = computerScore;
htmlRound.textContent = round;
