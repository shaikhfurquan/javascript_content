
// this keyword
// defenition :- In JavaScript, the this keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.

Ex:-
console.log(this); //In a browser, outputs: Window {...}

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



Ex:-
const obj = {
    name: 'Alice',
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  };  
obj.greet(); // Output: "Hello, Alice"