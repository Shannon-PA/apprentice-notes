const readline = require('readline-sync')
let run_game = true;

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
let correct = false;
for (var i = 0; i < answer.length; i++) {
    console.log(answer[i])
    if (letter == answer[i]) {
        correct = true;
    }
}
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
    if (correct) {
        console.log ('Placeholder: Congrats. You did it!!!')
        check_game_over (letters_tried, current_solution, answer, max_tries)
    }else{
        console.log('Placeholder: You lose Foo. Try again next time!!!')
        check_game_over (letters_tried, current_solution, answer, max_tries)
    }
    //put logic here
    return game_over;

}

 console.log(" Hello, thanks for playing. Lets get started!!!");

while (run_game) {
    console.log(current_solution);
    console.log(letters_guessed);
    let letter = guess();
    let correct = check(letter, answer);
    
    if(correct) {
        console.log('Placeholder: AYE YOU GOT IT!');
        current_solution = update_solution(letter, answer, current_solution);
    }else{
        console.log('Placeholder: Sorry, try another letter');
        update_letter_tried();
    }

    check_game_over();
}
