
/*
What is Promise :- 
    A promise is an object that return a value which you hope to receive in future but not now.
    A promise in JavaScript is an object that represents the eventual completion of an asynchronous operation and its resulting value. It is used to handle asynchronous operations in a more predictable way.

Why promise:-
    Promise are used to handle asynchronous operations. They provide an alernative approach for callback by reducing the callback hell and writing th code cleaner.
*/
let p = new Promise((resolve, reject) => {
    let graduate = false;
    if (graduate) {
        resolve('Purchasing Laptop');
    } else {
        reject('Purchasing PC');
    }
})

p.then((data) => {
    console.log(data);
    console.log('Lenovo Laptop');
}).then((data) => {
    console.log('Ideapad');
}).catch((data) => {
    console.log(data);
    console.log('HP pc');
}).finally((data) => {
    console.log('Congratulations');
})
//Purchasing PC
//HP pc
//Congratulations



let data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'Shaikh', age: 24 });
        reject('Rejected with error')
    }, 3000)
})
data.then((item) => {
    console.log(item);
}).catch((err) => {
    console.log('Catch block', err);
})
//{ name: 'Shaikh', age: 24 }



//
let p = new Promise((resolve, reject) => {
    let purchase = false
    if (purchase) {
        resolve('Purchase Car')
    } else {
        reject('Purchase Bike')
    }
})

p.then((c_data) => {
    console.log(c_data);
    console.log('Kia car');
}).then((c_data) => {
    console.log('Seven Seater');
}).catch((b_data) => {
    console.log(b_data);
    console.log('Suzuki bike');
}).finally(() => {
    console.log('Congratulations');
})
//Purchase Bike
// Suzuki bike
// Congratulations