const findInterSection = (arr1, arr2) => {
    let newArray = []
    for (let i = 0; i < arr1.length; i++) {
        // arr1.includes(arr2[i]) ? newArray.push(arr2[i]) :null
        if (arr1.includes(arr2[i])) {
            newArray.push(arr2[i])
        }
    }

    return newArray
}
let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let a2 = [5, 6, 7, 8, 9, 10, 11, 12]

console.log(findInterSection(a1, a2));