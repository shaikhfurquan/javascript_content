Second largest number

const findsecondLargestNumber = (nums) => {
    if (nums.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = null;
    let secLargest = null;

    for (let i = 0; i < nums.length; i++) {
     if (largest === null || nums[i] > largest) {
        // Update second largest before updating largest
        secLargest = largest;
        largest = nums[i]; // Update largest
     } else if (nums[i] !== largest && (secLargest === null || nums[i] > secLargest)) {
        secLargest = nums[i]; // Update second largest
     }
    }
    return secLargest;
};

let arr = [4, 89, 4, 989, 46, 7, 4564, 654, 654];
console.log("Second Largest Number is", findsecondLargestNumber(arr));