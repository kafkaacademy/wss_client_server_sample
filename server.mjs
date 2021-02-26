import path from 'path'
import fs from 'fs'
import http from 'https';
import WebSocket from 'ws';
import {} from 'dotenv/config.js'
 
const port=process.env.PORT
const __dirname = path.resolve(path.dirname(''));
const options = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
  rejectUnauthorized: true,
} 

const server = http.createServer(options);
const wss = new WebSocket.Server({server});

wss.on('connection', (ws)=> {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('hello from server');
});

server.listen(port,()=> {
  const url=`wss://localhost:${server.address().port}`;
  console.log(`listening on url ${url}`); 
});
