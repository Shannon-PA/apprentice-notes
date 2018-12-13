

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// function bob(name) {
//   return `Hello, ${name}`
// }

// let response = bob("Marco");
// console.log(response);

const myArray = [
  'apple',
  'mango',
  'banana',
  'nectarine',
  'tomato'
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(myArray[getRandom(0, myArray.length -1 )])
