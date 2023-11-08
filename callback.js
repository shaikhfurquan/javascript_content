//CallBack:- passing the function as an argument.

function sayHi(){
    console.log('Hi...');
}

function sayHello(){
    console.log('Hello...');
}

let add = function(num1,num2,callb){
    console.log(num1+num2);
    callb();
}

add(10,20,sayHi);



function Hi(){
    console.log('Hi...');
}
let  name = (myname,callb) =>{
    callb()
    return myname
}
let res = name('shaikh' , Hi)
console.log(res);



function greet(name,callback){
    console.log('Hi ' + ' ' + name);
    callback()
}
function callme(){
    console.log('I am call back function');
}

greet('Mark' , callme)
//Hi  Mark
// I am call back function