const findLongestWord = (str) => {
    let largest = ''
    let arr = str.split(' ')

    for (let i = 0; i < arr.length; i++) {
        arr[i].length > largest.length ? largest = arr[i] : null
    }
    return largest
}

console.log(findLongestWord("hello worldd"));




// 4) Find the Longest Word in a String:

const findLongestString = (str) => {
    let words = str.split(" ");
    longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  };
  console.log(findLongestString("My name is sf"));
  