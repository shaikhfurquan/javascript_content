/*
Object:-
In JavaScript, an object is a data structure used to store key-value pairs. 
Each key (also called a property) is a string (or symbol), and the 
corresponding value can be any data type, including another object, 
function, or array. Objects are commonly used to represent structured data.
*/

//  Creating an Object
// There are two main ways to create an object:

// 1.Object literal syntax:
const person1 = {
    name: 'John',
    age: 30,
    isEmployed: true
};

// 2.Using the new Object() constructor:
const person2 = new Object();
person2.name = 'John';
person2.age = 30;
person2.isEmployed = true;


// Accessing Object Properties
// You can access properties in two ways:

// 1.Dot notation:
console.log(person1.name); // Outputs 'John'

// 2.Bracket notation:
console.log(person1['age']); // Outputs 30

const keys = Object.keys(person1); 
// ['name', 'age', 'isEmployed']
const values = Object.values(person1);
// ['John', 30, true]

const entries = Object.entries(person1); 
// [['name', 'John'], ['age', 30], ['isEmployed', true]]

console.log(person.hasOwnProperty('name')); // true
