var expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should return false if string only spaces', () => {
    expect(isRealString('     ')).toBe(false);
  });

  it('should return false if non-string object', () => {
    expect(isRealString(5)).toBe(false);
  });

  it('should return true if string contain character and spaces',() => {
    expect(isRealString('    NodeJS ')).toBe(true);
  });
});
