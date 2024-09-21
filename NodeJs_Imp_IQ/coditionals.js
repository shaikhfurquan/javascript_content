/*
If:-
The if Statement
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax
if (condition) {
  //  block of code to be executed if the condition is true
}
*/
let hour;
if (hour < 18) {
  console.log("Good day");
}


/*The else Statement
Use the else statement to specify a block of code to be executed if the condition is false.

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}*/

let age = 20;
if (age >= 18) {
  console.log('You can drive');
} else {
  console.log('Wait for 18');
}

let num = +prompt('Enter a number');
if (num % 2 == 0) {
  console.log('Insdide if/true');
  console.log(`The Number ${num} is Even `);
} else {
  console.log('Inside else/false');
  console.log(`The number is ${num} Odd`);
}
console.log('Exit if-else');

/*
The else if Statement
Use the else if statement to specify a new condition if the first condition is false.

Syntax
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
*/

let num = 10
if (num > 0) {
  console.log('+ve number');
} else if (num < 0) {
  console.log('-ve number');
} else {
  console.log('Equal number');
}
