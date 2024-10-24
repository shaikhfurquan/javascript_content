
// Ex-1
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



// Ex-2
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1'); // (4)
}, 0);

setInterval(() => {
    console.log('Interval'); // (5)
}, 0);

setImmediate(() => {
    console.log('Immediate'); // (6)
});

process.nextTick(() => {
    console.log('Next Tick'); // (2)
});

Promise.resolve().then(() => {
    console.log('Promise 1'); // (3)
});

console.log('End');


/*

Start/End: Synchronous code runs first.

Next Tick: Executes immediately after the current operation.

Promise 1: Microtask, runs after the next tick.

Timeout 1: Macrotask, executes after microtasks.

Interval: Executes after timeout (if it runs).

Immediate: Executes last in the next event loop iteration.

Microtasks (Promise, nextTick) have higher priority than macrotasks (setTimeout, setImmediate, setInterval).

Start
End
Next Tick
Promise 1
Timeout 1
Interval
Immediate

*/