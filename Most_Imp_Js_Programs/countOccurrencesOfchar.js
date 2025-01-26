let str = "sfgdgj iruoieunv iiueeref ofpeqmnv irqryut nvgtrjqj";

// Using a regular expression
let eCount = (str.match(/e/g) || []).length;
let fCount = (str.match(/f/g) || []).length;

console.log(`e is repeated ${eCount} times`);
console.log(`f is repeated ${fCount} times`);

// e is repeated 5 times
// f is repeated 3 times



let str1 = "adbc def ghi";

let dCount = 0;
let rCount = 0;

for (let i = 0; i < str1.length; i++) {
    if (str1[i] === 'e') {
        dCount++;
    } else if (str1[i] === 'f') {
        rCount++;
    }
}

console.log(`d is repeated ${dCount} times`);
console.log(`r is repeated ${rCount} times`);

// is repeated 1 times
// r is repeated 1 times