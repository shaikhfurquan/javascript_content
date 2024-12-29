
//- Not immmediate as its name
//- Its callback is place in the "check queue"


let a = 1;
let b = 3;

function addTwoNum (n1,n2){
    console.log(n1+n2);
}

setImmediate(()=>{
    addTwoNum(a,b)
}) //callback register

console.log('Inside the enevt loop');

//Inside the enevt loop
//4