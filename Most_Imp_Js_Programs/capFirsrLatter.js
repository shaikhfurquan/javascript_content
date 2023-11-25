
const capitalizeSentence = (sentence) => {
    const words = sentence.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const result = capitalizedWords.join(" ");
    return result;
  };
  
  console.log(capitalizeSentence("my name is furquan Shaikh"));
  console.log(capitalizeSentence("hello, World!"));