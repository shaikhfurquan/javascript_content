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





console.log('Start'); // Output: Start

setTimeout(() => {
    console.log('Timeout 1'); // Output: Timeout 1
}, 0);

setTimeout(() => {
    console.log('Timeout 2'); // Output: Timeout 2
}, 0);

setInterval(() => {
    console.log('Interval'); // This will keep running after every 1000ms
}, 1000);

setImmediate(() => {
    console.log('Immediate'); // Output: Immediate
});

process.nextTick(() => {
    console.log('Next Tick'); // Output: Next Tick
});

console.log('End'); // Output: End

/*

Explanation of Execution Order:
console.log('Start') - Executes first, outputting "Start".

process.nextTick() - Executes after the current operation completes but before any I/O tasks or timers. It outputs "Next Tick".

setImmediate() - Executes after the current event loop cycle and after I/O tasks. It outputs "Immediate".

setTimeout() - Even with a delay of 0, it executes after the I/O tasks and setImmediate. The first timeout outputs "Timeout 1".

Another setTimeout() - Executes next, outputting "Timeout 2".

console.log('End') - Executes last, outputting "End".


Start
Next Tick
Immediate
Timeout 1
Timeout 2
End
*/

