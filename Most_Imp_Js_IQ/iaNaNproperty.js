//NaN property in JavaScript?
// defenition :- isNaN() property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

//typeof of NaN will return a Number.

// isNaN() // Not a Number

console.log(isNaN('10'));       //false
console.log(isNaN(10));         //false
console.log(isNaN(undefined));  //true
console.log(isNaN(true));       //false