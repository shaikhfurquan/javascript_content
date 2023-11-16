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
  console.log(findLongestString("My name is furquan shaikh"));
  