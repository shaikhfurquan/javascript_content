/*
Ternary Operator:-
The ternary operator in JavaScript is a shorthand for an if-else statement. 
It is also known as the conditional operator and is the only operator in JavaScript that takes three operands
*/

let num = 10;
let res = (num%2 == 0) ? 'Even Number' : 'Odd Number';
console.log(res); // Even Number


let number = 10;
let result = (number>0) ? 'Positive Number' : 'Negative Number';
console.log(result); // Positive Number


const isLoggedIn = true;
const greeting = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(greeting); // Output: "Welcome back!"