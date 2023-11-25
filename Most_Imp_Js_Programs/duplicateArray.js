const removeDuplicates = (arr) => {
    const uniqueArray = [...new Set(arr)];
    return uniqueArray;
  };
  console.log(removeDuplicates([1, 2, 3, 4, 3, 2, 1]));


  let num = new Set([10,20,10])
  console.log(num);



  //Or
  const removeDuplicate = (arr) => {
    let newUniqueArray = []
    for (num of arr) {
        if (!newUniqueArray.includes(num)) {
            newUniqueArray.push(num)
        }
    }
    return newUniqueArray
}

console.log(removeDuplicate([1, 1, 2, 3, 4, 5, 5, 8, 3, 6, 7, 8, 6, 7, 8]));
console.log(removeDuplicate([1, 1, 2, 3, 4, 11,55,7,2,1, 8]));