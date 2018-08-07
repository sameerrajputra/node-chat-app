var socket = io();

socket.on('connect', () => {
	console.log('Conneted to server');

// 	socket.emit('createEmail', {
// 	from: "sameer@example.com",
// 	text:'for you'
// });

// 	socket.emit('createMessage', {
// 		from:'heroes@yahoo.com',
// 		text: 'you are my hero'
// 	})
});

socket.on('disconnect', () => {
	console.log('Disconnected from server');
});

// socket.on('newEmail', function(email){
// 	console.log('New Email', email);
// });

socket.on('newMessage', function(message){
	console.log('New message ', message);

	var li = jQuery('<li></li>');
	li.text(`${message.from}: ${message.text}`)

	jQuery('#messages').append(li);
});

// socket.emit('testMessage', {
// 	from: 'hewo',
// 	text: 'this is test'
// }, function(msg) {
// 	console.log('Acknowledgement: ', msg);
// });

jQuery('#message-form').on('submit', function(e){
	e.preventDefault();

	socket.emit('createMessage', {
		from: 'User',
		text: jQuery('[name=message]').val()
	}, function(){

});
});