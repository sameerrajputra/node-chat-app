var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Samir';
		var text = 'THis is the test message';

		var res = generateMessage(from, text);

		expect(res.from).toBe(from);
		expect(res.text).toBe(text);
		expect(typeof res.createdAt).toBe('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location message', () => {
		var res = generateLocationMessage('Samir', 1, 1);

		expect(res.from).toBe('Samir');
		expect(res.url).toBe('https://www.google.com/maps?q=1,1');
		expect(typeof res.createdAt).toBe('number');
	})
});