'use strict';

class Diamond {
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  static makeDiamond(letter) {
    let topHalf = this.createTopHalf(letter);
    let bottomHalf = topHalf.slice(0, -1).reverse();
    let complete = [...topHalf, ...bottomHalf];
    return complete.join('');
  }

  static createTopHalf(letter) {
    let index = this.ALPHABET.indexOf(letter);
    let letters = this.ALPHABET.slice(0, index + 1);
    let pad = this.calcPadding(index);
    let middle = 1;
    let resultArr = [];

    letters.forEach((letter, idx) => {
      if (idx === 0) {
        resultArr.push(" ".repeat(pad) + letter + " ".repeat(pad) + "\n");
        pad -= 1;
      } else {
        resultArr.push(" ".repeat(pad) + letter + " ".repeat(middle) + letter + " ".repeat(pad) + "\n");
        pad -= 1;
        middle += 2;
      }
    });

    return resultArr;
  }

  static calcPadding(index) {
    let width = (index * 2) + 1;
    return (width - 1) / 2;
  }
}

module.exports = Diamond;