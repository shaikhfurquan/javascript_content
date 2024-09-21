
/*
JavaScript Function:
    -A JavaScript function is a block of code designed to perform a particular task.
    -A JavaScript function is executed when "something" invokes it (calls it).

There are two types of JavaScript functions
    i)  Pre-defined functions
    ii) User-defined functions
*/

//Seral ways to create functions:

//1. Simple functions:

function sayHi(){
    console.log('Hi...');
}
sayHi()


function add(){
    let a1=10
    let a2=20
    console.log(a1+a2);
}
add()


//2. Functions Expressions:
let  sub = function(){
    let b1=10
    let b2=20
    console.log(b1-b2);
}
sub()


//3.Arrow Functions:
//Functions with parameters
let mul = (p1,p2) =>{
    console.log(p1*p2);
}
mul(20,20)

//Return function
let fullName = (fName,lName) =>{
    return fName+lName;
}
let result = fullName('Shaikh' , ' Furquan')
console.log(result);


//4. Immediate Invoked Functions:- IIFEs are functions that are executed immediately after being defined.

(function(x,y){
    console.log(x);
    console.log(y);
})(100,200)
//100 200


(function msg(){
    setTimeout(() =>{
        console.log('IEFs');
    },3000)
})()


//Function with for loop
function mulTable(num){
    for(i=1;i<=10;i++){
        console.log(`${num}x ${i} = ${num*i}`);
    }
}

mulTable(20)



function sayHello() {
    console.log("Hello!");
    return true; // Returning true to stop further execution if this is called
}

function sayGoodbye() {
    console.log("Goodbye!");
    return true; // Returning true to stop further execution if this is called
}

// Calling functions using the || (OR) operator
sayHello() || sayGoodbye();


/*
Hello!
When using the || operator, JavaScript evaluates from left to right and stops at the first true value it finds.
*/