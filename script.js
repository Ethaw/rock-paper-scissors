// ====== SETTINGS ======
let s = {
  choices: ["rock", "paper", "scissors"],
  // JS doesn't have tuple unlike python... Also, 
  // a cleaner and simpler way would be to manipulate the indices rather than 
  // the values themselves. But it goes against the instructions.
  // TODO: handle indices instead of values
  wins: new Set([
    ["paper", "rock"],
    ["rock", "scissors"],
    ["scissors", "paper"]
  ])
}


// ====== TOOLS ======

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomChoice(array) {
  // for positive values, ~~ is like Math.floor;
  // it is faster for small values.
  // TODO: handle Set, else raise type error
  return array[~~(Math.random()*array.length)];
}


// ====== CORE ======

// Redundant function, but it's to follow the project instructions
function getComputerChoice(choices = s.choices) {
  return randomChoice(choices);
}

function getPlayerChoice(choices = s.choices) {
  let playerChoice;
  let defaultMessage = choices.join(" / ");
  
  // Ask until the input is valid.
  while (true) {
    playerChoice = prompt("Enter your choice", defaultMessage);
    // Handle null case if the user presses cancel
    if (playerChoice && choices.includes(playerChoice.toLowerCase())) {
      break;
    }
    console.log("Invalid choice.")
  }
  
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (s.wins.has([playerSelection, computerSelection])) {
    return `You win! ${capitalize(playerSelection)} beats ${computerSelection}`;
  } else {
    return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}`;
  }
}

function game(totalRounds = 2) {
  for (let i=0; i<totalRounds; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }
}

game();