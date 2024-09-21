
/*
Hoisting:-
    In JavaScript, Hoisting is a kind of default behavior in which all the declarations either variable declaration or function declaration are moved at the top of the scope just before executing the program's code.

    Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
*/


// When you declare a variable using var, let, or const, the declaration is hoisted to the top of the current function or global scope.

console.log(y); // undefined
var y = 5;


// The code above is interpreted as follows during hoisting:


var x;
console.log(x); // undefined
x=5     


/*
Function Declarations:
Function declarations are also hoisted to the top of their containing scope, allowing you to call a function before its declaration in the code.
*/


sayHello(); // "Hello"

function sayHello() {
    console.log("Hello");
}


// During hoisting, the code is interpreted as:

function sayHi() {
    console.log("Hi...");
}

sayHi(); // "Hi..."