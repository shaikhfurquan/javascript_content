
// Make copy/duplicate element in a one array

const duplicateArray = (arr)=>{
    return arr.concat(arr)
}

console.log(duplicateArray([1,2,3]));
// [ 1, 2, 3, 1, 2, 3 ]