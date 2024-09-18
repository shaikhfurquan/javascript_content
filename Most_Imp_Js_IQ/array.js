/*
Array:-
In JavaScript, an array is a special type of object used to 
store multiple values in a single variable. Arrays can hold 
values of different data types, including numbers, strings, 
objects, and even other arrays. Arrays are ordered and indexed, 
starting from 0.
*/

// You can create arrays in different ways:
// Using array literal
let fruits = ['apple', 'banana', 'orange'];

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4);

console.log(fruits[0]);  // Outputs 'apple'
console.log(numbers[2]); // Outputs 3


// Common JavaScript Array Methods

// push(): Adds one or more elements to the end of the array.
fruits.push('grape'); // ['apple', 'banana', 'orange', 'grape']


// pop(): Removes the last element from the array and returns it.
fruits.pop(); // Removes 'grape', returns it.


// shift(): Removes the first element from the array and returns it.
fruits.shift(); // Removes 'apple', returns it.


// unshift(): Adds one or more elements to the beginning of the array.
fruits.unshift('kiwi'); // ['kiwi', 'banana', 'orange']


let moreFruits = ['grape', 'melon'];
let allFruits = fruits.concat(moreFruits); 
// ['kiwi', 'banana', 'orange', 'grape', 'melon']


let index = fruits.indexOf('orange'); // 2
