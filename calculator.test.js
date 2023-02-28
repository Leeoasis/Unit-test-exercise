const Calculator = require('./calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      const result = calculator.add(2, -3);
      expect(result).toBe(-1);
    });

    test('adds two negative numbers', () => {
      const result = calculator.add(-2, -3);
      expect(result).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('subtracts a smaller positive number from a larger positive number', () => {
      const result = calculator.subtract(5, 2);
      expect(result).toBe(3);
    });

    test('subtracts a negative number from a positive number', () => {
      const result = calculator.subtract(5, -2);
      expect(result).toBe(7);
    });

    test('subtracts a larger negative number from a smaller negative number', () => {
      const result = calculator.subtract(-2, -5);
      expect(result).toBe(3);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      const result = calculator.multiply(2, 3);
      expect(result).toBe(6);
    });

    test('multiplies a positive and a negative number', () => {
      const result = calculator.multiply(2, -3);
      expect(result).toBe(-6);
    });

    test('multiplies two negative numbers', () => {
      const result = calculator.multiply(-2, -3);
      expect(result).toBe(6);
    });
  });

  describe('divide', () => {
    test('divides a larger positive number by a smaller positive number', () => {
      const result = calculator.divide(6, 2);
      expect(result).toBe(3);
    });

    test('divides a positive number by a negative number', () => {
      const result = calculator.divide(6, -2);
      expect(result).toBe(-3);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => {
        calculator.divide(6, 0);
      }).toThrow('Division by zero');
    });
  });
});