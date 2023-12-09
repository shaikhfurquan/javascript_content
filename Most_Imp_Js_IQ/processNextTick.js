function add(a,b){
    console.log(a+b);
}
setImmediate(()=>{
    add(2,3)
    console.log('Set immediate');
})

setTimeout(()=>{
    add(3,4)
    console.log('Set timeout');
})

process.nextTick(()=>{
    add(4,5)
    console.log('Next tick');
})

console.log('End tick');
/*
End tick
9
Next tick
7
Set timeout
5
Set immediate
*/