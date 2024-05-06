// 1)  Reverse a String:

//Ex:-1
const ReverseString = (str) => {
  let reversedString = str.split("").reverse().join("");
  return reversedString;
};
console.log(ReverseString("Mark")); // kraM



// Ex:-2
const reverseString = (str) => (str.split("").reverse().join(""))

console.log(reverseString("hello"));  // olleh
console.log(reverseString("sf"));     // fs
console.log(reverseString("good"));   // doog


// Ex:-3
// Input :- how are you
// Output :- woh era uoy

var str = "how are you"
var savedStr = str.split(" ").map((word)=>{
  return word.split("").reverse().join("")
})

console.log(savedStr.join(" "));