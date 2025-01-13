// Ex-1
const arr = ["abc", "pqr", "xyz", "xyz"];

const obj = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log(obj); // Output: { abc: 1, pqr: 1, xyz: 2 }

// OR
// Ex-2
const arr = ["abc", "pqr", "xyz", "xyz"];
let obj = {};

// Loop through each item in the array
for (let i = 0; i < arr.length; i++) {
    let item = arr[i]; // Get the current item
    // console.log(item); abc pqr xyz xyz
    if (obj[item]) {
        obj[item]++; // Increment the count if the item already exists
    } else {
        obj[item] = 1; // Initialize the count if it's the first occurrence
    }
}

console.log(obj); // Output: { abc: 1, pqr: 1, xyz: 2 }