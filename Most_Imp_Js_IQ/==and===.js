
console.log(1 == true); // true
// The boolean `true` is coerced to the number `1`, so it becomes `1 == 1`, which is true.


console.log('true' == true); // false
// The string `'true'` is converted to NaN (Not-a-Number), and `true` is converted to 1. So, it's `NaN == 1`, which is false.


console.log('123' == 123); // true
// The string `'123'` is coerced to the number `123`, so it becomes `123 == 123`, which is true.



const  number1 = "10"
const  number2 = 10
//only check values
console.log(number1 == number2);        //true  
//check both  values and datatype as well
console.log(number1 === number2);       //false