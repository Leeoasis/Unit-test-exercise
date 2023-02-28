const capitalize = require('./capitalize.js');

describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
      const result = capitalize('hello world');
      expect(result).toBe('Hello world');
    });
  
    test('does not modify an already capitalized string', () => {
      const result = capitalize('Hello world');
      expect(result).toBe('Hello world');
    });
  
    test('handles an empty string', () => {
      const result = capitalize('');
      expect(result).toBe('');
    });
  });