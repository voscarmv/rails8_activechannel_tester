// client.js (can be run in another Node.js process)
import { BroadcastChannel } from 'worker_threads';

const channelName = 'my-channel';
const broadcastChannel = new BroadcastChannel(channelName);

broadcastChannel.onmessage = (event) => {
  console.log(`Client received: ${event.data}`);
};

broadcastChannel.postMessage('Hello from client!');