class Anagram {
  constructor(pattern) {
    this.pattern = pattern;
  }

  match(words) {
    let results = words.filter(word => {
      if (this.pattern.toLowerCase() === word.toLowerCase()) {
        return false;
      }

      if (this.pattern.toLowerCase().split('').sort().join('') === word.toLowerCase().split('').sort().join('')) {
        return true;
      }

      return false;
    });

    return results;
  }
}

let detector = new Anagram('Orchestra');
console.log(detector.match(['cashregister', 'Carthorse', 'radishes']));

module.exports = Anagram;