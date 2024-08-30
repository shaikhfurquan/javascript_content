

function add(callby , n1, n2){
    console.log(callby, ":" , n1+n2);
}

setImmediate(()=>{
    add("SetImmediate" , 2,3)
})
//callback register with check queue for the next cycle

setTimeout(()=>{
    add("SetTimeout" , 3,4)
}, 0)
//callback register with check queue for the next cycle

add("Direct" , 1,2)

//Direct : 3
//SetImmediate : 5
// SetImmediate : 7




// For loop using setTimeOut

for(var i=0 ; i<=3 ; i++){
    setTimeout(() => {
        console.log(i);
    }, 0);
}

/*
4 4 4 4
var is function-scoped (or globally scoped).
When the setTimeout runs, the loop is already finished, and i is 4.
All setTimeout callbacks use the same i, which is 4.
*/ 


for(let i=0 ; i<=3 ; i++){
    setTimeout(() => {
        console.log(i);
    }, 2000);
}

/*  
0 1 3
let is block-scoped.
Each iteration of the loop has its own copy of i.
When the setTimeout runs, it prints the i from its own iteration.
*/