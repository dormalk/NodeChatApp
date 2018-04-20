const path = require ('path');
const express = require ('express');
const socketIO = require ('socket.io');
const http = require('http');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
var userName = 'dor';
io.on('connection',(socket) => {
  console.log('New user connected')
  socket.emit('newMassage',{
    from:'Admin',
    massage: `Wellcome to chat!`,
    createAt: new Date().getTime()
  });

  socket.broadcast.emit('newMassage',{
    from:'Admin',
    massage: `New user connected`,
    createAt: new Date().getTime()
  });


  socket.on('disconnect',() => {
    console.log('Client disconnected');
  });

  socket.on('createMassage', (massage) => {
    console.log('createMassage',massage)
    io.emit('newMassage',{
      from: massage.from,
      text: massage.text,
      createAt: new Date().getTime()
    });
  });
});

server.listen(port,() => {
  console.log(`Server is up on port ${port}`);
});
