const readline = require('readline-sync')

const answer = "CRAZY";
let letters_tired = [];
let current_solution = ""
const max_tries = 6;


function guess() {
    let letter;
    // Ask user for letter, return letter
    letter = readline.question('Choose a letter please.')
    return letter;
}
  
function check(letter, answer) {
let correct;
// // put logic here, should return true or false;
return correct;
}
  
function update_solution(letter, answer, current_solution) {
    let updated_solution
    //put logic here
    return update_solution;
}

function update_letter_tried (letter, letters_tried){
    let new_letters_tried;
    //put logic here
    return new_letters_tried;
}

function check_game_over (letters_tried, current_solution, answer, max_tries) {
    let game_over;
    //put logic here
    return game_over;

}

guess()

