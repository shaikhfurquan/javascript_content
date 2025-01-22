
const arr1 = [2, 1, 3, 4, 8, 6, 5, 9, 7]
const res = arr1.sort()
console.log(res);


const arr2 = [2, 1, 3, 4, 8, 6, 5, 9, 7]
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] > arr2[j + 1]) {
            let temp = arr2[j]
            arr2[j] = arr2[j + 1]
            arr2[j + 1] = temp
        }
    }
}
console.log(arr2);
// [  1, 2, 3, 4, 5, 6, 7, 8, 9 ]


const arr3 = [2, 1, 3, 4, 8, 6, 5, 9, 7]
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] < arr2[j + 1]) {
            let temp = arr2[j]
            arr2[j] = arr2[j + 1]
            arr2[j + 1] = temp
        }
    }
}
console.log(arr2);
// [  9, 8, 7, 6, 5, 4, 3, 2, 1 ]