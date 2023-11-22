
// Ex-1
let findMissingNumber = (nums) => {
    let n = nums.length + 1;
    let sumOfTotal = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((sum, ele) => sum + ele, 0);
    return sumOfTotal - actualSum;
};

console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8, 9]));



// Ex-2
function findMissingNum(arr) {
    // Calculate the expected sum using the formula: n * (n + 1) / 2
    const expectedSum = (arr.length + 1) * (arr.length + 2) / 2;

    // Calculate the actual sum of the elements in the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Example usage
const numbers = [1, 2, 4, 6, 3, 7, 8];
const missingNumber = findMissingNum(numbers);

console.log(`The missing number is: ${missingNumber}`);