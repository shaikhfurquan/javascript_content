
/*
Do-while loop:- The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.
                The do...while is used when you want to run a code block at least one time.

syntax:-
do {
  code block to be executed
}
while (condition);
*/

let i=1;
do{
    console.log('Hello');
    i++
}while(i<=10);



let num=11
let j=1;
do{
    console.log(`${num}x ${j} = ${num*j}`);
    j++
}while(j<=10);