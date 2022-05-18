let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random()*10)
};

function compareGuesses(humanGuess, computerGuess, targetGuess) {

if (Math.abs(targetGuess - humanGuess) < Math.abs(targetGuess - computerGuess)) {
  return true
} else {
  return false
}
};
function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
    console.log(humanScore)
  } else if (winner === 'computer') {
   computerScore += 1;
   console.log(computerScore)
  }
};
function advanceRound () {
  currentRoundNumber += 1;
  } 