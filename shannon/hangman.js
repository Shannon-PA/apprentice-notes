// https://teamtreehouse.com/community/how-to-get-input-in-the-console-in-nodejs
// need to npm install 'readline-sync'

const readline = require('readline-sync');
let run = true;
const answer = 'CAT'
let lettersTried = [];
const maxTries = 10;
let currentSolution = '';

for (let i = answer.length; i > 0; i--) {
  currentSolution = currentSolution.concat('_');
}

function updateLettersTried(letter) {
  lettersTried.push(letter);
}


function getUserAnswer() {
  return readline.question(("Next letter? : "));
}

function checkIfLetterInWord(letter) {
  return answer.includes(letter);
}

function getCurrentSolution() {
  return currentSolution;
}

function updateCurrentSolution(letter) {
  let newSolution = '';
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === letter) {
      newSolution = newSolution.concat(letter);
    } else {
      newSolution = newSolution.concat(currentSolution[i]);
    }
  }
  currentSolution = newSolution;
}

console.log("Hi there, let's play!");

while(run) {
  console.log(getCurrentSolution());
  const guess = getUserAnswer().toUpperCase();
  if (checkIfLetterInWord(guess)) {
    updateCurrentSolution(guess);
    console.log(`Great job! '${guess}' is part of the word!`)
  } else {
    updateLettersTried(guess);
    console.log(`Oof... sorry bud, '${guess}' isn't in there.`)
  }

  console.log(currentSolution);
  console.log("Letters tried so far: ",lettersTried);
  // Check win / loss condition
  if (lettersTried.length == maxTries) {
    console.log("Game over!");
    run = false;
  }

  if (answer == currentSolution) {
    console.log("You got it!");
    run = false;
  }
}

console.log("Thanks for playing!");