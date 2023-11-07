
// Higher order functions :- A Function that accepts another function as an argument.

let msg = () =>{
    console.log('first order function');
}

let highorder = (returnF) =>{
    returnF()
}

highorder(msg)
