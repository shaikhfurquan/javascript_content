
// Spread Operator
// defenition :- The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.


const person1 = {
    Name : 'raj',
    age: 23,
    gmail:'raj@gmail.com',
    address:'MH',
    country:'india'
} 

const person2 = {...person1}
const person3 = {...person1 , Name:'kumar' , age:200}
console.log("This is person2" , person2);
console.log("This is person3" , person3);



const arr1 = [10,20,30];

const arr2 = [...arr1,40,50,60];
console.log(arr1)
console.log(arr2)
//[ 10, 20, 30 ]
// [ 10, 20, 30, 40, 50, 60 ]




const obj1 = {
    name : "Khan"
}
const obj2 = {
    age : 24
}

const res = {...obj1 , ...obj2}
console.log(res);
// { name: 'Khan', age: 24 }