// app.js
// A ROCK-PAPER-SCISSORS game played in the console

// ========== GLOBAL VARIABLES ==========
let computerScore = 0;
let humanScore = 0;

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

// Prompts the user to enter their choice

function getHumanChoice() {
  let humanChoice;
  // Prompt the user for input
  let sign = prompt("Choose: 1 for Rock, 2 for Paper, 3 for Scissors");

  // Convert the user's numeric input into the corresponding Rock, Paper, or Scissors choice
  switch (sign) {
    case "1":
      humanChoice = "Rock";
      break;
    case "2":
      humanChoice = "Paper";
      break;
    case "3":
      humanChoice = "Scissors";
      break;
  }
  console.log(`Human choice: ${humanChoice}`);
  return humanChoice;
}

// Plays a Round of paper rock scissors,compares the result and updates the Scores
function playRound() {
  let computerSelection = getComputerChoice();
  let humanSelection = getHumanChoice();
  // if Human chose Rock --------------------
  if (humanSelection === "Rock") {
    if (computerSelection === "Rock") {
      console.log(`A TIE both of you chose ${humanSelection}`);
    } else if (computerSelection === "Scissors") {
      console.log(
        `You WON!!, the computer chose ${computerSelection} and you ${humanSelection}`
      );
      humanScore++;
    } else {
      console.log(
        `You lost, the computer chose ${computerSelection} and you ${humanSelection}`
      );
      computerScore++;
    }
    //if human chose Paper --------------------
  } else if (humanSelection === "Paper") {
    if (computerSelection === "Paper") {
      console.log(`A TIE both of you chose ${humanSelection}`);
    } else if (computerSelection === "Rock") {
      console.log(
        `You WON!!, the computer chose ${computerSelection} and you ${humanSelection}`
      );
      humanScore++;
    } else {
      console.log(
        `You lost, the computer chose ${computerSelection} and you ${humanSelection}`
      );
      computerScore++;
    }
    // If human chose scissors --------------------
  } else if (humanSelection === "Scissors") {
    if (computerSelection === "Scissors") {
      console.log(`A TIE both of you chose ${humanSelection}`);
    } else if (computerSelection === "Paper") {
      console.log(
        `You WON!!, the computer chose ${computerSelection} and you ${humanSelection}`
      );
      humanScore++;
    } else {
      console.log(
        `You lost, the computer chose ${computerSelection} and you ${humanSelection}`
      );
      computerScore++;
    }
  }
  console.log("----------------------------------------------------");
}

// Plays a game round 5 times, calculates whowon after 5 rounds, and declares a final winner
function playGame() {
  let winner;
  console.log("Starting a new game of Rock, Paper, Scissors!");
  console.log("---------------------------------");

  // play 5 rounds of the game
  for (let i = 0; i < 5; ++i) {
    playRound();
  }

  // Determines the winner after playing the game for 5 rounds
  if (humanScore > computerScore) {
    winner = "Human Won";
  } else if (computerScore > humanScore) {
    winner = "Computer Won";
  } else {
    winner = "A TIE";
  }
  // Shows the final Results
  console.log("--- GAME OVER ---");
  console.log(`Final Result: ${winner}`);
  console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);
}

// starts the game when the page is loaded
playGame();
