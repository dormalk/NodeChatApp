var expect = require('expect');
var {generateMessage} = require('./message');

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
