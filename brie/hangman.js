const readline = require('readline-sync');
const answer = "COCONUT";
let letters_tried= [];
const max_tries = 6;
let current_solution = "____";
let run_game = true;

function guess(){
   var letter = readline.question("pick a letter.");
   console.log(letter);
   return letter;
}  

function check( letter, answer ) { 
    let correct;
    for (let i=0; i< answer.length;i++) {

    }
    return correct;
}
    
function check_win_conditions (answer, current_solution) {
    let won = true;
    //put my logic here
    return won 
}
function check_Loss_conditions ( ){
    let loss = false;
}
function updateLettersTried (){
    let = []
}

function updateProgress (){
    
}

    // what does it need to know to do its job
    //what are we going to get back from it?
//     var bar ="whatsup "
//      var foo = readline.question('What is your name?');
//      console.log(bar + foo +"!");
console.log("Place greeting here")

while(run_game){
    // output current solution
    // output wrong guesses
    let letter = guess();
    let correct = check(letter, answer);

    if (correct){
    console.log('Placeholder: YOU GOT IT RIGHT!')
    // call updateProgress()
    } else {
    console.log('Placeholder: YOU GOT IT WRONG')
    // update letters tried with wrong letter
    }
    // if (check_win_conditions()) {
        // output congrats
        // run_game = false;
    // }
    // if (check_loss_conditions()) {
        // output failure message
        // run_game = false;
    // }
}
