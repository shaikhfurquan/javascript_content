// Higher Order Functions in javascript.
// defenition :- Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.



function higherOrderFunc(fun){
    console.log("Higher order Function")
    fun();
}

const print = () =>console.log("Welcome...")
higherOrderFunc(print)


const higherOrderFun = ()=>{
    return function(){
        console.log("Returning a brand new Function")
    }
}

const respose = higherOrderFun()
respose();
//Returning a brand new Function
