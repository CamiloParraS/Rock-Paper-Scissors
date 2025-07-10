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

// ========== FUNCTIONS ==========

// Generates a random choice for the computer

function getComputerChoice() {
  let computerChoice;
  // Generate a random number between 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    // assign a choice based on the random number
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
}

// Plays a Round of paper rock scissors,compares the result and updates the Scores
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

  // we update the values in the DOM
  htmlHumanScore.textContent = humanScore;
  htmlComputerScore.textContent = computerScore;
  console.log("----------------------------------------------------");
}

// announce winner after 5 rounds

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
