import { EventEmitter } from 'events';
//LOOK AT THIS MORE ITS CONFUSING
const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);
}

function goodbye(name) {
    console.log('Goodbye World');
}

// Register event listeners
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbye)


myEmitter.emit('greet')
myEmitter.emit('goodbye')

// Error handling
myEmitter.on('error', (err) => {
    console.log('An Error Occured', err)
})