// server.js
import { BroadcastChannel } from 'worker_threads';

const channelName = 'my-channel';
const broadcastChannel = new BroadcastChannel(channelName);

broadcastChannel.onmessage = (event) => {
  console.log(`Received message: ${event.data}`);
};

console.log('1')

// Simulate sending messages after a delay
setTimeout(() => {
  broadcastChannel.postMessage('Hello from server!'); console.log("message1");
}, 1000);
console.log('1')

setTimeout(() => {
    broadcastChannel.postMessage('Another message from server!'); console.log("message2");
}, 3000);
console.log('1')
