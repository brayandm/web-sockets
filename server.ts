import WebSocket from 'ws';

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (connection) => {

  connection.on('message', (message) => {
    console.log('Message received:', message);
    // Envía un mensaje de respuesta al cliente
    connection.send('Answer from server: ' + message);
  });
});

console.log('Server running on port 8080');