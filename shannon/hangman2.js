const readline = require('readline-sync');
let run_game = true;
const answer = "BULL";
const max_tries = 6;
let current_solution = "____";
let letters_tried = [];

function guess() {
  let letter;
  letter = readline.question("Please pick a letter: ");
  return letter
}

function check(letter, answer) {
  let correct;
  // put logic here, should return true or false;
  return correct;
}

function check_win_conditions(answer, current_solution) {
  if (answer == current_solution) {
    return true;
  } 
    return false;

}


while (run_game) {
  let letter = guess();
  let correct = check(letter, answer);

  if (correct) {
    console.log('Placeholder: YOU GOT IT RIGHT!')
  } else {
    console.log('Placeholder: You got it wrong')
  }
}



