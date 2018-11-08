const readline = require('readline-sync');
let run_game = true;
const answer = "Boi"
let letters_tried = [];
const max_tries = 6;
let current_solution = "___"
let letter_tried = [];


function guess() {
   let letter;
    letter = readline.question("take a guess boi. ")
    return letter;
}

function check(letter, answers) {
    let correct;
    // put logic here boi!
    return correct;
}

function check_win_conditions(answer, current_solution) {
    let game_over;
    //put my logic here some time
    return game_over;
}

while (run_game) {
    let letter = guess();
    let correct = check(letter, answer);

    if (correct) {
        console.log('placeholder: your right')
    } else {
        console.log('placeholder: you dumb')
    }

}