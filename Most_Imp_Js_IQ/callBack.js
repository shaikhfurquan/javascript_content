
//callbacks
// defenition :- A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.


function greet (name , callback){
    console.log("Hello Mr." + name);
    callback()
}

function hello(){
    console.log("This is callBack function...");
}

function hello2(){
    console.log('This is callBack function2');
}

greet('Raj' , hello)
greet('Raj' , ()=>{
    console.log('Welcome...');
})

// Hello Mr.Raj
// This is callBack function...
//Hello Mr.Raj
// Welcome..