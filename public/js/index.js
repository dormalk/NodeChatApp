var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMassage',{
    to:'you',
    text:'Hi you too'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMassage', function (email) {
  console.log('newEmail',email);
});
