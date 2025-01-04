
// Higher order functions :- A Function that accepts another function as an argument.

let msg = () =>{
    console.log('first order function');
}

let highorder = (returnFunc) =>{
    returnFunc()
}

highorder(msg)



// array of numbers
const numsArray = [1, 2, 3, 4, 5]

function callbackFn(number) {
  return number * 2
}

const doubleNumbers = numsArray.map(callbackFn)
console.log(doubleNumbers) 
// Output: [2, 4, 6, 8, 10]
