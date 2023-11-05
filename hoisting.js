
/*
Hoisting:-
In JavaScript, Hoisting is a kind of default behavior in which all the declarations either variable declaration or function declaration are moved at the top of the scope just before executing the program's code.

In simple words, we can say that we can use the variables and functions in JavaScript before declaring them because as we discussed above JavaScript compiler moves the declarations of all the variables and functions at the top of their scope so that there will not be an error of any kind.
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