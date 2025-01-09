// Capital First Letter
const capitalizeSentence = (sentence) => {
  const words = sentence.split(" ");
  const capWords = words.map(
    (word) => word.charAt(0).toUpperCase()
      + word.slice(1)
  );
  const result = capWords.join(" ");
  return result;
};

console.log(capitalizeSentence("my name is sf"));
// My Name Is Sf
