class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(testArray) {
    let filteredArray = testArray.filter(testWord => {
      return (this.word.toLowerCase() !== testWord.toLowerCase()) &&
             (this.word.length === testWord.length);
    });

    let sortedWord = this.word.split('').sort().join('');
    let resultArray = [];

    filteredArray.forEach(word => {
      let sortedTest = word.toLowerCase().split('').sort().join('');
      if (sortedWord === sortedTest) {
        resultArray.push(word);
      }
    });

    return resultArray;
  }
}

module.exports = Anagram;

let detector = new Anagram('Orchestra');
console.log(detector.match(['cashregister', 'Carthorse', 'radishes']));