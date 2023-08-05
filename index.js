const EventEmitter = require("./event")
const eventEmitter = new EventEmitter();

eventEmitter.addEventListener('test', () => {
    console.log('test cb')
})
eventEmitter.addEventListener('test', (x) => {
    console.log('test cb with arg => ', x)
})
eventEmitter.addEventListener('test', () => {
    console.log('test cb')
    console.log('not same code')
})
console.log("before removing", eventEmitter.getHandlers('test'))

eventEmitter.removeEventListener('test', () => {
    console.log('test cb')
    console.log('not same code')
})

eventEmitter.on('test', () => {
    console.log('testing')
})
eventEmitter.once('once', () => {
    console.log('this runs once')
})
eventEmitter.emit('once')

eventEmitter.emit('test', 'data');

console.log('once fn ', eventEmitter.getHandlers('once'))
