const persons = {
    Rahul: 18,
    Raj: 19,
    Kunal: 9,
    Abhi: 17,
    Ajay: 25,
    Amit: 68,
    Lakshman: 32,
  };
   
  // Print all the persons, who's age is 18 or above 18, in ascending order according to their age.
  // Expected Output
  // ["Rahul", "Raj", "Ajay", "Lakshman", "Amit"];



  const result = Object.entries(persons).filter(([name , age]) => age >= 18).sort((a,b) => a[1] - b[1]).map(([name]) => name)
  console.log(result);
