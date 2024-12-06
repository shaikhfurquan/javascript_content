/*
Event Emitter:-
Event emitters in Node.js are a fundamental concept that enables asynchronous and event-driven programming. They allow you to create and handle custom events, which is essential in building scalable and efficient applications.
*/

const EventEmitter = require('events')
const myEmiter = new EventEmitter()

const myEventHandler = ()=>{
    console.log('Event Handler');
}

myEmiter.on('myEvent' , myEventHandler)
myEmiter.emit('myEvent')