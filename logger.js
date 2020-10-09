const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    // Call event
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg });
    }

}

const logger1 = new Logger()

logger1.on('message', data => console.log('called listener', data));// the .on method registers the listeners for your event.


logger1.log('Hello world!')
logger1.log('Hi!')
logger1.log('Hello!')


