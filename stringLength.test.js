const checkStringLength = require('./stringLength.js');

describe('checkStringLength', () => {
  test('returns the length of a valid string', () => {
    // Arrange
    const input = 'hello';
    const expectedOutput = 5;

    // Act
    const result = checkStringLength(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });

  test('throws an error when given an empty string', () => {
    // Arrange
    const input = '';

    // Act and assert
    expect(() => checkStringLength(input)).toThrow('String must be at least 1 character long');
  });

});
