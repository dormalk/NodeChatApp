var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage' , () => {
  it('should generate the correct message' , () => {
    var from = 'Me';
    var text = 'This messaage is from me';
    var message = generateMessage(from,text);

    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  });
});

describe('generateLocationMessage', () => {
  it('should generate corrent location message', () => {
    var from = 'Me';
    var latitude = 10;
    var longitude = 12;
    var url = `http://www.google.com/maps?q=10,12`;
    var message = generateLocationMessage(from,latitude,longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message.url).toBe(url);
    expect(message.from).toBe(from);
  });
});
