const readline = require("readline-sync");

const ANSWER = "SOMETHING";
const MAX_TRIES = 10;

let progress = '';
let done = false;
let currGuess;
let incorrect = [];

for(let i = 0; i < ANSWER.length; i++){
    progress += '_ ';
}

while(!done){

    currGuess = readline.question("Guess a letter ").toUpperCase();

    if(isInAnswer(currGuess, ANSWER)){
        console.log(`Yay, '${currGuess}' is in there`);
        progress = updateProgess(currGuess, ANSWER, progress);
    } else {
        console.log(`Welp, '${currGuess}' ain't in there chief`);
        incorrect.push(currGuess);
    }

    console.log("So far you got ", progress);
    console.log("And you didn't get ", incorrect);
    
    if(incorrect.length == MAX_TRIES){
        done = true;
        console.log(`Game over. . .the answer was ${ANSWER}`);
    } else if (checkCorrect(progress, ANSWER)){
        done = true;
        console.log(`Yup, the answer was ${ANSWER}`);
    }

    console.log('---------------');
}

function isInAnswer(letterGuessed, answer){
    for(i = 0; i < answer.length; i++){
        if(answer[i] == letterGuessed){
            return true;
        }
    }
    return false; 
}

function updateProgess(letter, answer, progress){
    progress = progress.split('').filter((i) => i != ' ');

    for(let i = 0; i < answer.length; i++){
        if(answer[i] == letter){
            progress[i] = letter;
        } 
    }

    return progress.join(' ');
}

function checkCorrect(progress, answer){
    progress = progress.split('').filter((i) => i != ' ');

    for(let i = 0; i < answer.length; i++){
        if(answer[i] != progress[i]){
            return false;
        }
    }

    return true;
}
