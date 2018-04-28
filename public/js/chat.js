var socket = io();

socket.on('connect', function () {
  var params = deparam(window.location.search);
  socket.emit('join',params,function(err){
    if(err){
      alert(err);
      window.location.href= '/';
    }else{
      console.log('No errors')
    }
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('updateUserList',function(users) {
  var ul = jQuery('#peoples ul');
  ul.text('');
  users.forEach(function(user){
    ul.append(jQuery('<li></li>').text(user));
  });
});

socket.on('newMessage', function (message) {
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var classMessage;
    switch (message.from) {
      case 'Admin':
        classMessage = 'adminMessage';
        break;
      case deparam(window.location.search).name:
        classMessage = 'myMessage';
        break;
      default:
        classMessage = 'userMessage';
    }

    var html = Mustache.render(template,{
      text:message.text,
      from:message.from,
      createdAt:formattedTime,
      classMessage
    });
    jQuery('#messages ul').append(html);
    updateScroll();
});

socket.on('newLocationMessage',function(message){
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#location-message-template').html();
  var classMessage;
  switch (message.from) {
    case 'Admin':
      classMessage = 'adminMessage';
      break;
    case deparam(window.location.search).name:
      classMessage = 'myMessage';
      break;
    default:
      classMessage = 'userMessage';
  }
  var html = Mustache.render(template,{
    text:message.text,
    from: message.from,
    createdAt:formattedTime,
    url:message.url,
    classMessage
  });

  jQuery('#messages ul').append(html);
  updateScroll();
});

jQuery('#message-form form').on('submit', function (e) {
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');
  if(messageTextbox.val()!==''){
    socket.emit('createMessage', {
      from: 'User',
      text: messageTextbox.val()
    }, function () {
      messageTextbox.val('');
    });
  }
});

var sendLocation = jQuery('#send-location');

sendLocation.on('click', function () {
  $('#load').toggle();
  $('#options').toggle();
  if(!navigator.geolocation){
    return alert('Geolocation not supported in your device');
  }
  navigator.geolocation.getCurrentPosition(function(position){
    socket.emit('createLocationMessage',{
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    });
    $('#load').toggle();
  },function(){
    alert('Can not fatch geolocation data');
  });
});

jQuery('#openOptions').on('click',function () {
  jQuery('#options').toggle();
});

$('#exit').on('click', function() {
  $('#options').toggle();
})

function updateScroll() {
  $("#messages").scrollTop($("#messages")[0].scrollHeight);
}
