'use strict';

function encode(string) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  let length = ALPHABET.length;
  let stringArray = string.toLowerCase().split('').filter(char => char.match(/[a-z0-9]/));

  let result = stringArray.map(char => {
    let index = ALPHABET.indexOf(char);
    if (index >= 0) {
      return ALPHABET[length - index - 1];
    } else {
      return char;
    }
  });

  let transformedString = result.join("");
  let spacedArray = transformedString.match(/.{1,5}/g);
  return spacedArray.join(' ');
}

module.exports = encode;

console.log(encode('The quick brown fox jumps over the lazy dog.'));