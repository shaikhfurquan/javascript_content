const originalArray = [1,2,[3,4]]
const shallowCopy = [...originalArray]

shallowCopy[2][0] = 99
console.log(originalArray);