let letters_used = [];
let max_tries = 5
let run_game = true 
let current_solution = "penguin"

for (let i = 0; i < answer.length; i++) {
    current_solution = current_solution.concat('_');
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function guess();
var letter = "pick a letter";
return letter.toLowerCase();

function check(letter, answer) { 
    let correct = false;
    for (let i=0; i < answer.length;i++){
        
        if(answer[i] == letter) {
            correct = true;
        }
    }
    if (!correct) {
        max_tries = max_tries - 1;
    }
    return correct;
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
}

console.log("Hello");
while(run_game){
    console.log("Your answer is: ", current_solution)
    console.log("Incorrect letters are: ", letters_tried)

    let letter = guess();

    let correct = check(letter, answer);

    if (correct){
        console.log('Placeholder: YOU GOT IT RIGHT!')
        current_solution = updateCurrentSolution(letter)
    } else {
        console.log('Placeholder: YOU GOT IT WRONG')
        updateLettersTried (letter)
    }
    check_win_conditions();
    
}

function check_win_conditions() {
    if (answer == current_soultion){
    console.log ("you won!");
        run_game = false; 
    }
    else if (max_tries == 0){
        console.log ("you lose");
        run_game = false;
    }
}