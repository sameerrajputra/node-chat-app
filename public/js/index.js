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

socket.on('newLocationMessage', function(message) {
	var li = jQuery('<li></li>');
	var a = jQuery('<a target="_blank">My Current Location</a>');

	li.text(`${message.from}:`);
	a.attr('href', message.url)
	li.append(a);

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
	var messageTextBox = jQuery('[name=message]');

	socket.emit('createMessage', {
		from: 'User',
		text: messageTextBox.val()
	}, function(){
		jQuery('[name=message]').val();
});
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function(){
	if(!navigator.geolocation){
		return alert('Your browser is not compatible with the geolocation API');
	}

	locationButton.attr('disabled', 'disabled').text('Sending location...');

	navigator.geolocation.getCurrentPosition(function(position){
		locationButton.removeAttr('disabled').text('Send Location');
		socket.emit('createLocationMessage', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});
	}, function(){
		locationButton.removeAttr('disabled').text('Send Location');
		alert('Unable to fetch location');
	});
});