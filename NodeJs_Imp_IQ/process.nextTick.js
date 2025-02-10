/*
-It puts its callback  at the front of the EVENT QUEUE
- Executes the code currently executed, but before IO EVENTS of TIMERS
*/

function add(callfrom, n1, n2){
    console.log(callfrom , " " , n1+n2);
}


setImmediate(()=>{
    add("SetImmediate" , 2,3)
})
//callback register with check queue for the next cycle

setTimeout(()=>{
    add("SetTimeout" , 3,4)
}, 0)
//callback register with check queue for the next cycle


process.nextTick(()=>{
    add("process next tick" , 4,6)
})

add("Direct" , 1,2)

// Direct   3
// process next tick   10
// SetTimeout   7
// SetImmediate   5