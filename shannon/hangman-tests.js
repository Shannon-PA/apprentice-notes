const Hangman = require('./hangman-class')


// game = new Hangman('CAT');
// game.play();

hangman = new Hangman('A');

// Test updateLettersTried method
hangman.updateLettersTried('A');
console.log(hangman.lettersTried)
console.log(Array.new('A'))
if (hangman.lettersTried == [ 'A' ]) {
  console.log('updateLettersTried: PASSED')
} else {
  console.log('updateLettersTried: FAIL')
}