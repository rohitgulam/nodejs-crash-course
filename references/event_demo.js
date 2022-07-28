// Event (emitter) demo 

const EventEmitter = require('events')

// creatae class

class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => {console.log('event fired!')})

// Init evnt
myEmitter.emit('event');
