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

function playRound(computerChoice, humanChoice) {
  round++;
  if (humanChoice === "Rock") {
    if (computerChoice === "Rock") {
      console.log("It's a Tie!");
    } else if (computerChoice === "Scissors") {
      console.log(`You Won!!`);
      playerScore++;
    } else {
      console.log("You Lose!!");
      computerScore++;
    }
    if (humanChoice === "Paper") {
      if (computerChoice === "Paper") {
        console.log("It's a Tie!");
      } else if (computerChoice === "Rock") {
        console.log("You Won!!");
        playerScore++;
      } else {
        console.log("You Lose!!");
        computerScore++;
      }
    }
    if (humanChoice === "Scissors") {
      if (computerChoice === "Scissors") {
        console.log("It's a Tie!");
      } else if (computerChoice === "Paper") {
        console.log("You Won!!");
        playerScore++;
      } else {
        console.log();
        computerScore++;
      }
    }
    console.log(`
    You selected: ${humanChoice}
    The Computer Chose: ${computerChoice}
    The scores are: 
        Human: ${humanScore}
        Computer: ${computerScore}
    The current round is: ${round}`);
  }
}

  // Write the logic to play the entire Game

  function playGame() {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);

    const checkWinner = (humanScore, computerScore) => {
      let winner;
      if (humanScore > computerScore) {
        winner = "Human";
      } else if (computerScore > humanScore) {
        winner = "Computer";
      } else {
        winner = "TIE";
      }
      return winner;
    };
    const winner = checkWinner(computerSelection, humanSelection);
    if (winner === "Human" || winner === "Computer") {
      console.log(`The winner is ${winner}`);
    } else {
      console.log("it's a Tie");
    }
    console.log(`
    Final Human Score: ${humanScore}
    Final Computer Score: ${computerScore}
    `);
  }


function play5Times() {
  for (let i = 0; i < 5; i++) {
    playGame();
  }
}

play5Times();
