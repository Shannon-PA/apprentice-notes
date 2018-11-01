// const max_tries = 6
// let letters_tried = [];
// let current_solution = "___"
// letters_tried.push("")

// var answers = ['BOB','BILLY','AMAZING','GREAT','DARKSIDE','FORCE'];
// var RandomAnswer = 
// myArray[Math.floor(Math.random() * myArray.length)];

// console.log(letters_tried)

// function guess() {
//     let letter;

//     return letter;
// }

// function check(letter,answers) {
// let correct;

// return correct;
// }

// function check_win_conditions(answer, current_solution) {
//    if (current_solution == answer) {
//         return true;
//      }
//      else {
//          return false;
//      }
//     return answer == current_solution;
// }


// console.log(answers[random_number])

const readline = require('readline-sync')
let run_game = (true)
const answer = "BOB";
const max_tries = 6;
let current_solution = "___"
let letters_tried = [];

function guess() {
    let letter;
    letter = readline.question('Enter a letter')
    return letter;
}

function check(letter, answer) {
    let correct;
    //logic
    return correct;
}

while (run_game) {
    let letter = guess();
    let correct = check(letter, answer)

    if (correct) {
        console.log("Nice")
    } else {
        console.log("You wrong")
    }
}
// var foo = readline.question('What is your name?')
// console.log("What's up " + foo + "!");