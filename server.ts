import * as dotenv from "dotenv";
import WebSocket from "ws";

dotenv.config();

const server = new WebSocket.Server({ port: Number(process.env.PORT!) });

server.on("connection", (connection) => {
  connection.on("message", (message) => {
    console.log("Message received:", message);
    // Envía un mensaje de respuesta al cliente
    connection.send("Answer from server: " + message);
  });
});

console.log("Server running on port 8080");
