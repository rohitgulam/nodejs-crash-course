const uuid = require('uuid');
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg})
    }
}

module.exports = Logger