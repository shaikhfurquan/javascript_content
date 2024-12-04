
console.log(1 == true); // true
// The boolean `true` is coerced to the number `1`, so it becomes `1 == 1`, which is true.

console.log(1 === true); // false
// `1` is a number, and `true` is a boolean. No type conversion occurs, so they are not equal.



console.log('true' == true); // false
// The string `'true'` is converted to NaN (Not-a-Number), and `true` is converted to 1. So, it's `NaN == 1`, which is false.

console.log('true' === true); // false
// The string `'true'` is of type `string`, and `true` is a boolean. No type coercion, so they are not equal.



console.log('123' == 123); // true
// The string `'123'` is coerced to the number `123`, so it becomes `123 == 123`, which is true.

console.log('123' === 123); // false
// `'123'` is a string and `123` is a number. Since their types are different, they are not strictly equal.



console.log('' == false); // true
// The empty string `''` is coerced to `false`, so it becomes `false == false`, which is true.

console.log('' === false); // false
// An empty string `''` is of type `string`, and `false` is a boolean. They are different types, so the result is false.



console.log(null == undefined); // true
// `null` and `undefined` are loosely equal in JavaScript, so this comparison returns true.

console.log(null === undefined); // false
// `null` and `undefined` are different types (`null` is an object, `undefined` is its own type), so they are not strictly equal.



console.log({} == true); // false
// An empty object `{}` is coerced to `NaN`, and `true` is coerced to `1`. Since `NaN == 1` is false, the result is false.

console.log({} === true); // false
// An empty object `{}` is of type `object`, and `true` is a boolean. Since their types are different, the result is false.



console.log([1, 2, 3] == '1,2,3'); // true
// The array `[1, 2, 3]` is coerced to the string `'1,2,3'`, so it becomes `'1,2,3' == '1,2,3'`, which is true.

console.log([1, 2, 3] === '1,2,3'); // false
// The array `[1, 2, 3]` is an object, and `'1,2,3'` is a string. Even though their string representations might be the same, they are different types, so the result is false.



console.log([] == false); // true
// An empty array `[]` is coerced to an empty string `''`, which is then coerced to `false`. Therefore, `false == false` returns true.

console.log([] === false); // false
// An empty array `[]` is of type `object`, and `false` is a boolean. Since they are different types, the result is false.



console.log(5 == undefined); // false
// `undefined` is only loosely equal to `null`. Since `5` is a number and `undefined` cannot be coerced to a meaningful number, the result is false.

console.log(5 === undefined); // false
// `5` is a number, and `undefined` is its own type. Since their types are different, they are not strictly equal.



console.log([42] == 42); // true
// The array `[42]` is coerced to the string `'42'`, which is then coerced to the number `42`. So, it becomes `42 == 42`, which is true.

console.log([42] === 42); // false
// The array `[42]` is an object, and `42` is a number. They are different types, so no type coercion occurs, and the result is false.
