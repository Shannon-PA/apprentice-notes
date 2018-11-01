const readline = require('readline-sync');

class Hangman {
  constructor(answer) {
    this.answer = '';
    this.lettersTried = [];
    this.maxTries = 10;
    this.currentSolution = '';
    this.answer = answer;

    for (let i = answer.length; i > 0; i--) {
      this.currentSolution = this.currentSolution.concat('_');
    }
  }

  updateLettersTried(letter) {
    this.lettersTried.push(letter);
  }

  getUserAnswer() {
    return readline.question(("Next letter? : "));
  }

  checkIfLetterInWord(letter) {
    return this.answer.includes(letter);
  }

  updateCurrentSolution(letter) {
    let newSolution = '';
    for (let i = 0; i < this.answer.length; i++) {
      if (this.answer[i] === letter) {
        newSolution = newSolution.concat(letter);
      } else {
        newSolution = newSolution.concat(this.currentSolution[i]);
      }
    }
    this.currentSolution = newSolution;
  }

  play() {
    console.log("Hi there, let's play!");
    let run = true;
    while(run) {
      console.log(this.currentSolution);
      const guess = this.getUserAnswer().toUpperCase();
      if (this.checkIfLetterInWord(guess)) {
        this.updateCurrentSolution(guess);
        console.log(`Great job! '${guess}' is part of the word!`)
      } else {
        this.updateLettersTried(guess);
        console.log(`Oof... sorry bud, '${guess}' isn't in there.`)
      }
    
      console.log(this.currentSolution);
      console.log("Letters tried so far: ",this.lettersTried);
      // Check win / loss condition
      if (this.lettersTried.length == this.maxTries) {
        console.log("Game over!");
        run = false;
      }
    
      if (this.answer == this.currentSolution) {
        console.log("You got it!");
        run = false;
      }
    }
    
    console.log("Thanks for playing!");
  }

}

module.exports = Hangman;
