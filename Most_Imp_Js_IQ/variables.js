/*
Var :-  -Global Variables scope
        -Redeclare possible
        -Reassign also possible
*/

var x=20        
console.log(x);

x=50        

var x=10
console.log(x);


/*
let :-  -Block level scope
        -Redeclare Not possible
        -Reassign possible
*/

let y=25
console.log(y);

y=21
console.log(y);

// let y = 55       //Not possible




/*
const :- -blocks as well as functions scope
        -Redeclare Not possible
        -Reassign Not possible
*/

const pi= 3.14
// pi = 20.2       Not possible
console.log(pi);

