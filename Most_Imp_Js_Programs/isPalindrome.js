
const isPalindrome=(str)=>{
    return str=== str.split("").reverse().join("")
}
console.log(isPalindrome("mom"));   //true
console.log(isPalindrome("hi"));    //false