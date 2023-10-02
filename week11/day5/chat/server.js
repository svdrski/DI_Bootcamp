const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5555;
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
    
  });
});


http.listen(port, host, () => {
  console.log(`Socket.IO server running at http://${host}:${port}/`);
});