const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle client connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle message exchanges
  socket.on('message', (message) => {
    console.log('Received message:', message);
    io.emit('message', message);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
