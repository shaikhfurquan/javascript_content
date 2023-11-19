// call by value

const number = (x,y) =>{
    x = 100;
    y = 200;
}

const a = 10;
const b = 20;
console.log("Before calling function "+a+" "+b);
number(a,b);
console.log("After calling function "+a+" "+b);