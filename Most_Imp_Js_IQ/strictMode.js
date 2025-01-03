Strict Mode:-
In JavaScript, "use strict"; enables strict mode, 
a feature introduced in ECMAScript 5. It helps 
catch common coding errors and improves performance 
by enforcing stricter parsing and error handling.


Ex:-
function example() {
    undeclaredVar = 10;  // No error, creates a global variable
    return undeclaredVar;
  }
  
console.log(example());  // Output: 10

Ex:-  
"use strict";

function example() {
  undeclaredVar = 10;  // Error: undeclaredVar is not defined
  return undeclaredVar;
}

console.log(example());
