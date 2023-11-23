// Find the Largest Number in an Array:

const findLargestNumber = (nums) => {
  let largest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
};
console.log(findLargestNumber([4, 89, 4, 989, 46, 7, 4564, 654, 654]));