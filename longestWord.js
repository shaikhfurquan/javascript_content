const findLongestWord = (str) => {
    let largest = ''
    let arr = str.split(' ')

    for (let i = 0; i < arr.length; i++) {
        arr[i].length > largest.length ? largest = arr[i] : null
    }
    return largest
}

console.log(findLongestWord("hello worldd"));


