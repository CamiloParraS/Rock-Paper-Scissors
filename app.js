// app.js
// A ROCK-PAPER-SCISSORS game played in te console

// === Global Variables ===
let computerScore = 0;
let humanScore = 0;

// === Functions ===

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

// Logic behind the Human choice

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
      humanChoice = "Scissors";
      break;
  }
  console.log(`Human choice: ${humanChoice}`);
  return humanChoice;
}

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
}

// Write the logic to play the entire Game for 5 times

function playGame() {
  let winner;
  for (let i = 0; i < 5; ++i) {
    playRound();
  }
  if (humanScore > computerScore) {
    winner = "Human Won";
  } else if (computerScore > humanScore) {
    winner = "Computer Won";
  } else {
    winner = "A TIE";
  }
  console.log(`And the result is: ${winner}
    Human Score: ${humanScore}
    Computer Score: ${computerScore}`);
}

playGame();
