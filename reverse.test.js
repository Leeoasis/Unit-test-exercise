const reverseString = require('./reverse.js');


describe('reverseString', () => {
    test('reverses a string', () => {
      // Arrange
      const input = 'hello';
      const expectedOutput = 'olleh';
  
      // Act
      const result = reverseString(input);
  
      // Assert
      expect(result).toBe(expectedOutput);
    });
  });
