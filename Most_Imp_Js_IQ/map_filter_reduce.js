
// Map :-  Javascript array map() method calls the specified function for every array element & returns the new array.This method doens't change the original array.

let arr1 = [2,3,4,5]
let arr2 = arr1.map(function(val){
    return val * 3
})
console.log(arr2);
//[ 6, 9, 12, 15 ]



//Filter:- Javascript array filter() method filter the extract element of an array that satisfying the provided condition.This method doens't change the original array.

let data = [1,5,78,95,45,61,77,69,42]
let res = data.filter(function(val){
    return val>60
})
console.log(res);
//[ 78, 95, 61, 77, 69 ]


//Reduce:- The reduce method executes a reducer function on each elementof the array & returns a single value.
let collection = [1,2,3,4,2,1]
let result = collection.reduce(function(h1,h2){
    return h1+h2
})
console.log(result);
//13