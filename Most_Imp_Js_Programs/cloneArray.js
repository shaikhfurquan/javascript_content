// Clone/Copy array

// Ex-1
function cloneArray(arr){
    return [...arr]
}
const result = cloneArray([1,2,3,4,5])
console.log(result);

// Ex-2
function copyArray(arr) {
    return arr.map(function(elem){
        return elem
    })
}

var newArray= cloneArray([4,5,6,7,8,9])
console.log(newArray);