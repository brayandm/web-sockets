import WebSocket from 'ws';

// Crea un nuevo servidor WebSocket en el puerto 8080
const server = new WebSocket.Server({ port: 8080 });

// Manejador de conexión para el servidor WebSocket
server.on('connection', (socket) => {
  // Maneja los mensajes recibidos desde el cliente
  socket.on('message', (message) => {
    console.log('Mensaje recibido:', message);
    // Envía un mensaje de respuesta al cliente
    socket.send('Respuesta del servidor: ' + message);
  });
});

console.log('Servidor WebSocket iniciado en el puerto 8080');