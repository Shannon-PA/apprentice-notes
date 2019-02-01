const readline = require('readline-sync')
let run_game = true;
const random_words = ["HONEST","LOVELY","CRAZY"];
let letters_tried = [];
let current_solution = ""
const max_tries = 6;

const max = random_words.length - 1;
const random_no = getRndInteger(0, max);
const answer = random_words[random_no]

for (let i = 0; i < answer.length; i++) {
    current_solution = current_solution.concat('_');
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function guess() {
    let letter;
    letter = readline.question('Choose a letter please. The max is six letters.    ');
    return letter.toUpperCase();
}
  
function check(letter, answer) {
    let correct = false;
    for (let i = 0; i < answer.length; i++) {
        if (letter == answer[i]) {
            correct = true;
        }
    }
    return correct;
}
  
function update_solution(letter) {
    let newSolution = '';
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === letter) {
        newSolution = newSolution.concat(letter);
        } else {
        newSolution = newSolution.concat(current_solution[i]);
        }
    }
    current_solution = newSolution;
}

function update_letter_tried (letter){
    letters_tried.push(letter);
}

function check_game_over() {
    if (answer == current_solution) {
        console.log ('Congrats. You did it!!!');
        run_game = false;
    } else if (max_tries == letters_tried.length) {
        console.log('You lose Foo. Try again next time!!!');
        run_game = false;

    }

}

 console.log(" Hello, thanks for playing. Lets get started!!!. Hint :AN EMOTION");

while (run_game) {

    console.log(current_solution);
    console.log(letters_tried);
    let letter = guess();
    let correct = check(letter, answer);
    
    if(correct) {
        console.log('AYE YOU GOT IT!');
        update_solution(letter, answer, current_solution);
    }else{
        console.log('Sorry, try another letter');
        update_letter_tried(letter);
    }


    check_game_over();
}
