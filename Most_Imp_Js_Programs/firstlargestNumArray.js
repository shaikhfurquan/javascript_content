// Find the First/Largest Number in an Array:

Ex-1
const findLargestNumber = (nums) => {
  let largest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
};
let arr = [4, 89, 4, 989, 46, 7, 4564, 654, 654]
console.log("Largest Number is" ,findLargestNumber(arr));


Ex-2
const array = [10,200,30]
let largestNumber = 0
for(i=0 ; i<array.length ; i++){
    if(array[i] > largestNumber){
        largestNumber = array[i]
    }
}

console.log(`largest numberis ${largestNumber}`);