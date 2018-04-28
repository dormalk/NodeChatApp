var socket = io();

var myNickname='DoriToS';

socket.on('connect', function () {
  var params = deparam(window.location.search);
  console.log(params);
  socket.emit('join',params,function(err){
    if(err){
      alert(err);
      window.location.href= '/';
    }else{
      console.log('No errors')
    }
  });
  console.log("finish");
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var classMessage;
    switch (message.from) {
      case 'Admin':
        classMessage = 'adminMessage';
        break;
      default:
        classMessage = 'myMessage';
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
  var html = Mustache.render(template,{
    text:message.text,
    from: myNickname,
    createdAt:formattedTime,
    url:message.url
  });

  jQuery('#messages ul').append(html);
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