//Closures in JavaScript.
// defenition :- Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

function msg(){
    let obj = {
        name:'sf',
        age:23
    }
    return function(){
        console.log(obj.name)
    }
}

const response = msg()
response();



function outerFunction() {
    // Variable defined in the outer scope
    let outerVariable = 'I am from the outer function';

    // Inner function (closure)
    function innerFunction() {
        // Accessing the outerVariable from the outer scope
        console.log(outerVariable);
    }

    // Returning the inner function
    return innerFunction;
}

// Call the outer function and store the returned inner function in a variable
const closureFunction = outerFunction();

// Call the closure function, which still has access to outerVariable
closureFunction();
