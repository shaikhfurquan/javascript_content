const isAnagram = (str1, str2) => {
  let sortedStr1 = str1.toLowerCase()
    .split("").sort().join("");
  let sortedStr2 = str2.toLowerCase()
    .split("").sort().join("");
  return sortedStr1 === sortedStr2;
};
console.log(isAnagram("mom", "mom"));
