// https://teamtreehouse.com/community/how-to-get-input-in-the-console-in-nodejs
// npm install readline-sync
const readline = require('readline-sync');
var name = readline.question("What is your name? ");
console.log(`Hi ${name}, nice to meet you.`);