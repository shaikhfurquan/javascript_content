// 1)  Reverse a String:

const ReverseString = (str) => {
    let reversedString = str.split("").reverse().join("");
    return reversedString;
  };
  console.log(ReverseString("anas"));