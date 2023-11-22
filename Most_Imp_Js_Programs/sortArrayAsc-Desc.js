//Ascending
const sortArrayAscending = (arr) => {
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray;
  };
  console.log(sortArrayAscending([1, 4, 3, 5, 6, 7, 2]));


  //Decending
  const sortArrayDescending = (arr) => {
    const sortedArray = arr.sort((a,b) => b - a );
    return sortedArray;
  };
  console.log(sortArrayDescending([1, 4, 3, 5, 6, 7, 2]));