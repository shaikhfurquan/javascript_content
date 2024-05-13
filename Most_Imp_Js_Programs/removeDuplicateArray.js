// Program to remove duplicate element in an array

// Ex-1
const removeDuplicates = (arr) => {
    const uniqueArray = [...new Set(arr)];
    return uniqueArray;
};
console.log(removeDuplicates([1, 2, 3, 4, 3, 2, 1]));



// Ex-2
let num = new Set([10, 20, 10])
console.log(num);



// Ex-3
const removeDuplicate = (arr) => {
    let newUniqueArray = []
    for (num of arr) {
        if (!newUniqueArray.includes(num)) {
            newUniqueArray.push(num)
        }
    }
    return newUniqueArray
}

console.log(removeDuplicate([1, 1, 2]));