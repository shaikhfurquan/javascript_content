// 1)  Reverse a String:

const ReverseString = (str) => {
  let reversedString = str.split("").reverse().join("");
  return reversedString;
};
console.log(ReverseString("anas"));




const reverseString = (str) => (str.split("").reverse().join(""))

console.log(reverseString("hello"));