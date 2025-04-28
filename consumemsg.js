import WebSocket from 'ws';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

(
    async () => {
        const url = `${process.env.APIURL}/session`;
        const usr = process.env.USER1;
        const pass = process.env.USERPASS1;
        let output = null;
        try {
            const response = await fetch(url, {
                method: 'POST', // Use POST or another HTTP method as needed
                headers: {
                    'Content-Type': 'application/json', // Set the content type
                },
                body: JSON.stringify({ user: { email_address: usr, password: pass } }) // Send the body as JSON
            });
            output = await response.json();
        } catch (e) {
            console.error(e)
        }
        console.log(output);


        const token = `${output.data.token}`;
        const cableUrl = `${process.env.WS}/cable?token=${token}`;

        const ws = new WebSocket(cableUrl);
        
        ws.on('open', function open() {
          console.log('Connected to the server');
          // Send a message to the server
          ws.send(JSON.stringify({ type: 'greeting', payload: 'Hello from Node.js client!' }));
        });
        
        ws.on('message', function incoming(data) {
          console.log('Received:', data.toString());
        });
    }
)();

