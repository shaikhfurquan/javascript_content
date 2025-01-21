// Ex-1
const reverseInt = (n) => {
  let reversedInteger = parseInt(n.toString().split("").reverse().join(""));
  return reversedInteger;
};
console.log(reverseInt(46546));



// Ex-2
function reverseInteger(num) {
  // Convert the number to a string, reverse it, and convert it back to a number
  const reversedString = num.toString().split('').reverse().join('');
  const reversedNumber = parseInt(reversedString, 10);


  return reversedNumber, reversedNumber;
}

// Example usage
const originalNumber = 123456789;
const reversedNumber = reverseInteger(originalNumber);

console.log(`Original: ${originalNumber}`);
console.log(`Reversed: ${reversedNumber}`);
