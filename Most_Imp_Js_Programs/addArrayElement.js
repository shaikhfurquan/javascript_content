// Sum of array elements

// Ex-1
var arr = [1, 2, 3, 4, 5, 6]
var sum = 0

arr.forEach((elem) => {
    sum = sum + elem
})
console.log(sum); // 21


// Ex-2
var arr = [1, 2, 3, 4, 5, 6];
var sum = arr.reduce((acc, curVal) =>
    acc + curVal, 0);
console.log(sum); // 21


// Ex-2
var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum); // 21


// Adding only numbers not string
var arr = ['abc', 123, 'bdc', 4, 5, 'yq']
var sum = 0
arr.forEach(function (elem) {
    if (typeof elem === 'number') {
        sum = sum + elem
    }
})

console.log("Numbers sum only = ", sum);
// Output: Numbers sum only = 132
