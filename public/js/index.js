var socket = io();

socket.on('connect', () => {
	console.log('Conneted to server');

// 	socket.emit('createEmail', {
// 	from: "sameer@example.com",
// 	text:'for you'
// });
	socket.emit('createMessage', {
		from:'heroes@yahoo.com',
		text: 'you are my hero'
	})
});

socket.on('disconnect', () => {
	console.log('Disconnected from server');
});

// socket.on('newEmail', function(email){
// 	console.log('New Email', email);
// });

socket.on('newMessage', function(newMsg){
	console.log('New message ', newMsg);
})
