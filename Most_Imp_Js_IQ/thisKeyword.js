
// this keyword
// defenition :- In JavaScript, the this keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.

const person = {
    empName: 'sf',
    deg: 'Nodejs Developer',
    age: 20,
    salary: 100, 
    getThis: function () {
        return this.empName
    }
}

console.log("This is object ", person.getThis())