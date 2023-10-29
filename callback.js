//CallBack:- passing the function as an argument.

function sayHi(){
    console.log('Hi....');
}

function sayHello(){
    console.log('Hello....');
}

let add = function(num1,num2,callb){
    console.log(num1+num2);
    callb();
}

add(10,20,sayHi);