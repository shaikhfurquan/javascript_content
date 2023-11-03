
//Spread Operator:-The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

let array1 = [1,2,3];
let array2 = [...array1 ,4,5,6];
console.log(array2);


let obj1 = {
    name : "Raj",
    age : 24
}

let obj2 = {...obj1}
console.log(obj1);
console.log(obj2);
console.log(obj1.name);
console.log(obj2.name);
console.log(obj1.age);
console.log(obj2.age);
