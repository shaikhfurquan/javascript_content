
/*
For Of Loop:- The loop is to iterate through the values of an iterable .
              The for-of loop cannot be used to iterate over an object.

For-In Loop:- The for-in loop is used to iterate the keys of an object.
              
*/


let array = [10,20,30]
for(val of array) {
    console.log(val);
}
//10,20,30

let person = {
    name : 'John',
    age : 44,
    gender : 'Male'
}

for (data in person){
    console.log(data);         //name, age , gender
    console.log(person[data]); //John, 44, Male
}