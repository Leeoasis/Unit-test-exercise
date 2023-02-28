function checkStringLength(str) {
    if (str.length < 1) {
      throw new Error('String must be at least 1 character long');
    }
    if (str.length > 10) {
      throw new Error('String must not be longer than 10 characters');
    }
    return str.length;
  }

module.exports = checkStringLength;
