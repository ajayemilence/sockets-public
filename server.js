let PORT = process.env.PORT || 3000;
let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection',function(socket){
	console.log('user connected via socket.io!');

socket.on('message', function(message){
	console.log('message received :' + message.text);

	socket.broadcast.emit('message', message);	
});

socket.emit('message',{
	text: 'welcome to the chat app !'
});

});

http.listen(PORT, ()=>{
	console.log('Server get started !');
});
