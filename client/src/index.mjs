const protocolPrefix = (window.location.protocol === 'https:') ? 'wss:' : 'ws:';
const url = protocolPrefix + "//" + window.location.hostname + ":" + process.env.PORT

const error = document.body.appendChild(document.createElement('div'));
error.innerText='using '+url
const data = document.body.appendChild(document.createElement('div'));
data.innerText="message from server: "

try {
  const socket = new WebSocket(url);

  // Connection opened
  socket.onopen= ()=>{
    socket.send('Hello from client!');
  };

  // Listen for messages
  socket.onmessage=(event) =>{
    data.innerHTML += "<h1>"+ event.data+"</h1>"
  }
} 
catch (e) {
  error.innerText="error" + e;
}
