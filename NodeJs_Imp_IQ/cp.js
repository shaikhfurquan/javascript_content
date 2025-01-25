/*
Child Process:-
Child processes in Node.js are a way to spawn new processes from a Node.js script, allowing you to run multiple processes concurrently. This is useful for tasks that require a lot of CPU power, I/O operations, or when you need to run a separate process for a specific task.
*/

const cp = require('child_process')
cp.exec('start chrome') 
cp.exec('start /index.html') 
// cp.exec('start chrome https://chat.openai.com/c/00a4d3e8-0263-4efb-a5b9-a905b398adb0') 