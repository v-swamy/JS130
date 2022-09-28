'use strict';

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(wordArray) {
    let sortedWord = this.word.split('').sort().join('');
    let anagrams = [];

    wordArray.forEach(test => {
      if ((this.word !== test.toLowerCase()) && (test.toLowerCase().split('').sort().join('') === sortedWord)) {
        anagrams.push(test);
      }
    });

    return anagrams;
  }
}

module.exports = Anagram;