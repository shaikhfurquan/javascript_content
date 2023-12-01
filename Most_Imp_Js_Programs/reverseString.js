// 1)  Reverse a String:

const ReverseString = (str) => {
  let reversedString = str.split("").reverse().join("");
  return reversedString;
};
console.log(ReverseString("Mark"));




const reverseString = (str) => (str.split("").reverse().join(""))

console.log(reverseString("hello"));
console.log(reverseString("sf"));
console.log(reverseString("good"));