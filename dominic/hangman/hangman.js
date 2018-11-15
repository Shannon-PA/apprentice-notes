const readline = require('readline-sync');
const answer = "pears";
let letters_tried= [];
let max_tries = 6;
let current_solution = "-----";
let run_game = true;

function guess(){
   var letter = readline.question("pick a letter.");
   return letter.toLowerCase();

}  

function check(letter, answer) { 
    let correct = false;
    for (let i=0; i < answer.length;i++){
        if(answer[i] == letter) {
            correct = true;
        }
    }

    if (!correct) {
        max_tries--;
        console.log(max_tries)
    }
    return correct;
}

function check_win_conditions () {
    if (answer == current_solution) {
        console.log("you won")
        run_game = false;
    } else if (max_tries = 0) {
        console.log("you lost")
        run_game = false; 
    }
}

function updateLettersTried (letter){
    letters_tried.push(letter);
}

function updateCurrentSolution(letter) {
    let newSolution = '';
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === letter) {
        newSolution = newSolution.concat(letter);
      } else {
        newSolution = newSolution.concat(current_solution[i]);
      }
    }
    return newSolution;
    r
  }

  console.log("Welcome");

while(run_game){
    console.log("Your answers so far: ", current_solution)
    console.log("Incorrect letters: ", letters_tried)

    let letter = guess();

    let correct = check(letter, answer);

    if (correct){
        console.log('Placeholder: YOU GOT IT RIGHT!')
        current_solution = updateCurrentSolution(letter)
    } else {
        console.log('Placeholder: YOU GOT IT WRONG')
        updateLettersTried (letter)
    }
    check_win_conditions ()
    
}
console.log("thanks for playing")
