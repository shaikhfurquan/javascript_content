
// Sum of array elements

// Ex-1
var arr = [1,2,3,4,5,6]
var sum = 0

arr.forEach((elem)=>{
    sum = sum + elem
})
console.log(sum);


// Ex-2
var arr = [1, 2, 3, 4, 5, 6];
var sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


// Ex-2
var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);


// Adding only numbers not string
var arr = ['abc' , 123 , 'bdc' , 4, 5 ,'yq']
var sum = 0
arr.forEach(function(elem){
    if(typeof elem === 'number'){
        sum = sum + elem
    }
})

console.log("Numbers sum only = " , sum);
 