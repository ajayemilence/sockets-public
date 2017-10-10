var socket = io();

socket.on('connect',function(){
	console.log('user connected via socket.io! and server');
});

socket.on('message', function (message){
	console.log('New message :');
	console.log(message.text);
});