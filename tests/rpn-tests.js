const expect = require('expect');
const rpn = require('../src/rpn').rpn;
describe('rpn', () => {
  it('should return 45 when passed in "3 5 10 + *"', () => {
    let result = rpn('3 5 10 + *');
    expect(result).toEqual(45);
  });
  it('should return 35 when passed in "7 5 *"', () => {
    let result = rpn('7 5 *');
    expect(result).toEqual(35);
  });
  it('should return 27 when passed in "3 3 3 * *"', () => {
    let result = rpn('3 3 3 * *');
    expect(result).toEqual(27);
  });
  it('should return 100 when passed in "10 10 10 10 10 10 10 10 10 10 + + + + + + + + +"', () => {
    let result = rpn('10 10 10 10 10 10 10 10 10 10 + + + + + + + + +');
    expect(result).toEqual(100);
  });
});