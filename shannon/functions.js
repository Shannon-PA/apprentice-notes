var foo = "hello";

var bar = "world";

var baz = foo + " " + bar;

var new_string = `asdfasdfasdf ${foo}`

// console.log(new_string);

var myString = "Dominic"

console.log(myString.indexOf("Dm"));

// if (2 == 2) {
//   console.log("it happened!");
// }
// Write a function that I can pass an email address into. 
// If the address does not end with '.com' return a warning, otherwise
// return something positive

function emailChecker(mail) {
  if (mail.indexOf(".com") != -1) {
    return "Yay! You rock!"
  }

  return "Dude, you need to end it with .com, get it together!"
}

console.log(emailChecker("shannon.buys@pinnacol.org"));