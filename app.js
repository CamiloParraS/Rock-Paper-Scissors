// Variables Scores
let computerScore = 0;
let humanScore = 0;
let round = 0;

// The Logic Behind the computer choice

function getComputerChoice() {
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
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

getComputerChoice();

// Logic behind the Humna choice

function getHumanChoice() {
  let humanChoice;
  let sign = prompt("Choose: 1 for Rock, 2 for Paper, 3 for Scissors");

  switch (sign) {
    case "1":
      humanChoice = "Rock";
      break;
    case "2":
      humanChoice = "Paper";
      break;
    case "3":
      humanChoice = "Scissiors";
      break;
  }
  console.log(`Human choice: ${humanChoice}`);
  return humanChoice;
}
getHumanChoice();

function playRound(computerChoice, humanChoice) {
  round++;
  if (humanChoice === "Rock") {
    if (computerChoice === "Rock") {
      console.log("It's a Tie!");
    } else if (computerChoice === "Scissors") {
      console.log(`You won!!`);
      playerScore++;
    } else {
      console.log("You Lose!!");
      computerScore++;
    }
  }
  if (humanChoice === "") {
  }
  if (computerChoice === "") {
  }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);
