const readline = require('readline-sync');


const answer = "COCONUT";
let letters_tried= [];
const max_tries = 6;
let current_solution = "_______";
let run_game = true;
let win = false;
let lose = false;

function guess(){
   let letter = readline.question("pick a letter.");
   return letter.toUpperCase();

}  

function check(letter, answer) { 
    let correct = false;
    for (let i=0; i< answer.length;i++){
        if (letter == answer[i]) {
            correct = true;
        } 
    }
    return correct;
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
    current_solution = newSolution;
}

function update_letters_tried (letter){
    letters_tried.push(letter);
}

function check_game_over(answer, current_solution){
    
    if ( answer == current_solution){
        run_game = false ;
        win = true;
    
    } else if (letters_tried.length == max_tries){
        run_game = false;
        lose = true;
    } else {
        run_game = true;
    }
}

    // what does it need to know to do its job
    //what are we going to get back from it?

//     var bar ="whatsup "
//      var foo = readline.question('What is your name?');
//      console.log(bar + foo +"!");
// **************answer.answer = to uppercese



while(run_game){
    let letter = guess();
    let correct = check(letter, answer);

    if (correct){
        updateCurrentSolution (letter);
    console.log('Placeholder: YOU GOT IT RIGHT!', current_solution)
    } else { 
        update_letters_tried(letter);
    console.log('Placeholder: YOU GOT IT WRONG', letters_tried)
    }

    check_game_over(answer, current_solution);

    if (win){
        console.log("Congrats, you did it!!!")
    }
    
    if (lose){
        console.log("Boo you lost!!")
    }

}