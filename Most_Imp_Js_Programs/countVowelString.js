const countVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

console.log(countVowels('hello world'));        //3
console.log(countVowels('products'));           //2