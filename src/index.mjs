const port = process.env.PORT
const url = `wss://localhost:${port}`;

//const data = document.body.appendChild(document.createElement('error'));
const data = document.body.appendChild(document.createElement('div'));
data.id = "data"
try {
  const socket = new WebSocket(url);

  // Connection opened
  socket.addEventListener('open', function (event) {
    socket.send('Hello from client!');
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
    document.getElementById('data').innerText = 'Message from server : ' + event.data;
  })
} catch (e) {
  console.log("error" + e)
}
