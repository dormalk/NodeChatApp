var socket = io();

var prevTime=0;
var myNickname='DoriToS';

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  var classMessage;
  var formattedTime = moment(message.createdAt).format('h:mm a');
  if(!(formattedTime===prevTime)){
    var li =jQuery(`<li class=\"time\">${formattedTime}</li>`)
    jQuery('#messages ul').append(li);
    prevTime=formattedTime;
  }
  if(message.from === 'Admin') {
    classMessage = 'adminMessage';
  }
  else{
    classMessage = 'myMessage';
  }
  li = jQuery(`<li class=\"${classMessage}\"></li>`);
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages ul').append(li);
  updateScroll();
});

socket.on('newLocationMessage',function(message){
  var classMessage;
  if(message.from === 'Admin') {
    classMessage = 'adminMessage';
  }
  else{
    classMessage = 'myMessage';
  }
  var li = jQuery(`<li class=\"${classMessage}\"></li>`);
  var a = jQuery('<a target="_blank">Here My Location</a>')

  li.text(`${message.from}: `);
  a.attr('href',message.url);
  li.append(a);
  jQuery('#messages ul').append(li);
  updateScroll();
  $('#load').toggle();
});

jQuery('#message-form form').on('submit', function (e) {
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');
  if(messageTextbox.val()!==''){
    socket.emit('createMessage', {
      from: myNickname,
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
