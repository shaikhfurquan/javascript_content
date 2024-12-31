/*
Promises
defenition :- A promise in JavaScript is an object that represents the eventual completion of an asynchronous operation and its resulting value. It is used to handle asynchronous operations in a more predictable way.

promise has three stage

1.) Pending
2.) Fulfilled -> .then  [resolve]
3.) Reject   -> .catch  [reject]
*/

let p = new Promise((resolve, reject) => {
    // console.log(p);
    let number = "30"
    if (number === 30) {
        resolve('This is a number')
    } else {
        reject('This is not a number');
    }
})
p.then((msg) => console.log(msg)).catch((err) => console.log(err))
console.log(p);



const fetchDataAPIOne = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Fetching Data from API 1')
    },4000);
})
const fetchDataAPITwo = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Fetching Data from API 2')
    },3000);
})
const fetchDataAPIThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Fetching Data from API 3')
    },2000);
})

//running all parallely
Promise.all([
    fetchDataAPIOne,
    fetchDataAPITwo,
    fetchDataAPIThree,
]).then((data)=>console.log(data))
// o/p:-
// [
//   'Fetching Data from API 1',
//   'Fetching Data from API 2',
//   'Fetching Data from API 3'
// ]


//show executed first
Promise.race([
    fetchDataAPIOne,
    fetchDataAPITwo,
    fetchDataAPIThree,
]).then((data)=>console.log(data))
// o/p:-
//Fetching Data from API 3