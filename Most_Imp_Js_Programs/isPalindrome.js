
// Ex-1
const isPalindrome=(str)=>{
    return str=== str.split("").reverse().join("")
}
console.log(isPalindrome("mom"));   //true
console.log(isPalindrome("hi"));    //false



// Ex-2
const stringPalChecker = (string)=>{
    var reversed = string.split("").reverse().join("")
    if(reversed === string){
        return true
    }else{
        return false
    }
}

console.log(stringPalChecker('poop'));  // true
console.log(stringPalChecker('loop'));  // false