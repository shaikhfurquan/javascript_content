/*
Shallow Copy:-
    A shallow copy duplicates the top-level structure of an array or object, creating a new object/array, but it does not create a new copies of the new object/array.
*/

let obj = {
    name: 'khan',
    address: {
        city: 'Hyderebad',
        state: 'TS'
    }
}
let user = { ...obj }
user.address.city = 'High-Tech'     //change original object as well.So we use deep copy.
console.log('obj is :', obj);
//address : {city: 'High-Tech', state: 'TS'}
console.log('user is :', user);
//address : {city: 'High-Tech', state: 'TS'}



const originalArray = [1, 2, [3, 4]]   //change original array as well.So we use deep copy.
const shallowCopy = [...originalArray]

shallowCopy[2][0] = 99
console.log(originalArray);
// [1,2[99,4]]
console.log(shallowCopy);
// [1,2[99,4]]