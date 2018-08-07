const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New User connected');

// 	socket.emit('newEmail',{
// 	from:'Ram',
// 	text: 'Hey you!',
// 	createdAt:'123'
// });

// 	socket.on('createEmail', function(email){
// 		console.log('Email created', email);
// 	})

	// socket.emit('newMessage', {
	// 	from: 'sameer@example.com',
	// 	text: 'Jenny are you all right?',
	// 	createdAt: '123'
	// });

	socket.on('createMessage', function(message){
		console.log('created Message ', message);

		io.emit('newMessage', {
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		})
	})

	socket.on('disconnect', () => {
		console.log('New user disconnected');
	})
});
	


server.listen(port, () => {
	console.log(`App is running on port: ${port}`);
})