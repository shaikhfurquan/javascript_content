/*
Deep Copy:-
    A deep copy create a entirely new object/array along with new copies of all nested objects/array, It is completely independent of the original/array, So changes copy will not affect the original.
*/

let obj = {
    name: 'khan',
    address: {
        city: 'Hyderebad',
        state: 'TS'
    }
}

let user = JSON.parse(JSON.stringify(obj));
user.address.city = 'High-Tech'
console.log('obj is :' , user);
// address: {city: 'Hyderebad', state: 'TS'}
console.log('user is :' , obj);
// address: {city: 'High-Tech', state: 'TS'}



const originalArray = [1,2,[3,4]]
const deepCopy = JSON.parse(JSON.stringify(originalArray))

deepCopy[2][0] = 99
console.log(originalArray); 
// [1,2[3,4]]
console.log(deepCopy)
// [1,2[99,4]]