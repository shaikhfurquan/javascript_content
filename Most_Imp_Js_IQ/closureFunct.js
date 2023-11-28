//Closures in JavaScript.
// defenition :- Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

function random(){
    let obj = {
        name:'sf',
        age:23
    }
    return function(){
        console.log(obj.name)
    }
}

const response = random()
response();