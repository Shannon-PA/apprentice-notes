const readline = require("readline-sync");

const POTENTIAL_ANSWERS = ["SOMETHING", "COCONUTS", "TRY ME", "PASSWORD", "WHY ARE YOU LIKE THIS", "SUPERCALIFRAGILISTICEXPIALADOCIOUS", "HELLO", "DINOSAUR", "CAN YOU SPELL", "STARDUST"];
const MAX_TRIES = 10;

let gameInfo = {
    answer: '',
    progress: '',
    done: false,
    currGuess: '',
    incorrect: [],
    cont: true
}

gameInfo = resetGame(POTENTIAL_ANSWERS);

console.log("Welcome! Let's play hangman.");
console.log(gameInfo.progress);

while(gameInfo.cont){

    gameInfo.currGuess = readline.question("Guess a letter ").toUpperCase();

    if(isInAnswer(gameInfo.currGuess, gameInfo.answer)){
        console.log(`Yay, '${gameInfo.currGuess}' is in there`);
        gameInfo.progress = updateProgess(gameInfo.currGuess, gameInfo.answer, gameInfo.progress);
    } else {
        console.log(`Welp, '${gameInfo.currGuess}' ain't in there chief`);
        gameInfo.incorrect.push(gameInfo.currGuess);
    }

    console.log("So far you got ", gameInfo.progress);
    console.log("And you didn't get ", gameInfo.incorrect);
    
    if(gameInfo.incorrect.length == MAX_TRIES){
        gameInfo.done = true;
        console.log(`Game over. . .the answer was ${gameInfo.answer}`);
    } else if (checkCorrect(gameInfo.progress, gameInfo.answer)){
        gameInfo.done = true;
        console.log(`Yup, the answer was ${gameInfo.answer}`);
    }

    if(gameInfo.done){
        if(readline.keyInYN("Want to play again?")){
            gameInfo = resetGame(POTENTIAL_ANSWERS);
            console.log(gameInfo.progress);
        } else {
            console.log("End Game");
            gameInfo.cont = false;
        }
    }

    console.log('___________________');
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
    let newProgress = '';

    for(let i = 0; i < answer.length; i++){
        if(answer[i] == letter){
            newProgress += letter + " ";
        } else if(answer[i] == " "){
            newProgress += "  ";
        } else {
            newProgress += "_ ";
        }
    }

    newProgress = newProgress.split('');
    
    for(let i = 0; i < progress.length; i++){
        if(progress[i] != " " && progress[i] != "_"){
            newProgress[i] = progress[i];
        }
    }

    return newProgress.join('');
}

function checkCorrect(progress, answer){
    progress = progress.split('').filter((i) => i != ' ');
    answer = answer.split('').filter((i) => i != " ");

    for(let i = 0; i < answer.length; i++){
        if(answer[i] != progress[i]){
            return false;
        }
    }

    return true;
}

function resetGame(potentAnswers){
    let rand = Math.floor(Math.random() * (potentAnswers.length));
    let progress = '';
    let answer = potentAnswers[rand];

    for(let i = 0; i < answer.length; i++){
        if(answer[i] != " "){
            progress += '_ ';
        } else {
            progress += "  ";
        }
    }

    return {
        answer: answer,
        progress: progress,
        done: false,
        currGuess: '',
        incorrect: [],
        cont: true
    }
}

