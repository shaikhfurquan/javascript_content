// Ex-1
const arr1 = ["abc", "pqr", "xyz", "xyz"];

const obj1 = arr1.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log(obj1); // Output: { abc: 1, pqr: 1, xyz: 2 }

// OR
// Ex-2
const arr2 = ["abc", "pqr", "xyz", "xyz"];
let obj2 = {};

// Loop through each item in the array
for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i]; // Get the current item
    // console.log(item); abc pqr xyz xyz
    if (obj2[item]) {
        obj2[item]++; // Increment the count if the item already exists
    } else {
        obj2[item] = 1; // Initialize the count if it's the first occurrence
    }
}

console.log(obj2); // Output: { abc: 1, pqr: 1, xyz: 2 }



// Ex-3
let array = [1, 2, 2, 3, 4, 3, 3, 5, 4, 1, 1];

function countOccurrences(input) {
    let occurrences = {};

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        if (occurrences[element] === undefined) {
            occurrences[element] = 1; // First occurrence
        } else {
            occurrences[element]++; // Increment count
        }
    }

    return occurrences;
}

let result = countOccurrences(array);
console.log(result);
