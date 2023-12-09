const EventEmitter = require('events')
const myEmiter = new EventEmitter()

const myEventHandler = ()=>{
    console.log('Event Handler');
}

myEmiter.on('myEvent' , myEventHandler)
myEmiter.emit('myEvent')