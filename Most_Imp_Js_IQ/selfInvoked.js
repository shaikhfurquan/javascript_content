// selfInvoking function / Immediate Invoked function
// defenition :- A self-invoking function is a JavaScript function that executes immediately after it has been defined. This is done by wrapping the function in parentheses and then immediately calling it.

(function(){
    console.log("This is self Invoking function");
})();


//This is self Invoking function
(() =>{
    console.log("This is self Invoking function");
})()

//This is self Invoking function