

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