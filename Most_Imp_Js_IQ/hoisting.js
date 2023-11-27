//Hoisting in javascript.
// defenition :- Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

hoistedVar = 3;
console.log(hoistedVar)
var hoistedVar;
//3

hoistedFun();

function hoistedFun(){
    x = 34;
    console.log(x)
    // var x;
}