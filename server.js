const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ioClient = require('socket.io-client');
const winston = require('winston');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle client connections
io.on('connection', (socket) => {
  console.log('Client ${socket.id} connected');

  // Handle message exchanges
  socket.on('message', (message) => {
    console.log('Received message '${message}' from client ${socket.id}');
    io.emit('message', message);
  });

    // Send message to server 2
    const server2 = ioClient.connect('http://35.167.154.126:3000');
    server2.emit('message', message);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('Client ${socket.id} disconnected');
  });
});

// Start the server
const port = process.env.PORT || 3000;
http.listen(port, '0.0.0.0', () => {
  console.log(`Server started on port ${port}`);
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'app.log'
    })
  ]
});
