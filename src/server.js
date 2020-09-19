const WebSocket = require("ws");

// Create a websocket server on port 8080
// ws://localhost:8080
const wss = new WebSocket.Server({
  port: 8080,
});

// When the connection is established
wss.on("connection", (ws) => {
  // Handle received data
  ws.on("message", (message) => {
    console.log(`Message received: ${message}`);
  });

  // Send data to client
  ws.send("Server: Connection established");
});
