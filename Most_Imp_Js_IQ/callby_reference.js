//call by reference

const callByReference = (obj) =>{
    obj.name = 'raj'
    obj.age = 99
}

const obj = {
    name : 'kumar',
    age : 24
}

console.log("Before calling the function" ,  obj.name , obj.age); 
// Before calling the function kumar 24
callByReference(obj)
console.log("after calling the function" ,  obj.name , obj.age);
// after calling the function raj 99