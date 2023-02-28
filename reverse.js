function reverseString(string) {
    // Split the string into an array of characters, reverse the array, and join the characters back into a string
    return string.split('').reverse().join('');
  }

module.exports = reverseString;
