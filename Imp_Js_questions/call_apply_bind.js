
/*In JavaScript, call, apply, and bind are methods that allow you to control the execution context of a function.

- call is used to invoke a function with a specified this value and arguments provided individually.

- apply is similar to call, but it takes arguments as an array.

- bind returns a new function with a specified this value and any arguments that are provided.
*/

const person1 = {
    fName : 'Amaan',
    lName : 'Khan',
    fullName : function (hometown , country) {
        return this.fName + ' ' + this.lName + ' ' + hometown + ' ' + country
    }
}

const person2 = {
    fName : 'Raj',
    lName : 'Kumar'
}
//Using call
console.log(person1.fullName.call(person1 , 'Hyderabad' , 'India'));
//Amaan Khan Hyderabad India
console.log(person1.fullName.call(person2 , 'Hyderabad' , 'India'));
// Raj Kumar Hyderabad India


//using apply
console.log(person1.fullName.apply(person1 , ['Hyderabad' , 'India']));
//Amaan Khan Hyderabad India
console.log(person1.fullName.apply(person2 , ['Hyderabad' , 'India']));
// Raj Kumar Hyderabad India


//using bind
const result = person1.fullName.bind(person2 , 'Pune' , 'India');
console.log(result);
//ƒ (hometown , country) {
//     return this.fName + ' ' + this.lName + ' ' + hometown + ' ' + country
// }
console.log(result());
// Raj Kumar Pune India