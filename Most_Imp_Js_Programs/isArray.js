

// Check whether array or object

const checkArray = (elem) => {
    return Array.isArray(elem)
}
console.log(checkArray([1, 2]));    // true
console.log(checkArray([]));        // false
console.log(checkArray({}));        // false