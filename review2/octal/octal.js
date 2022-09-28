'use strict';

class Octal {
  constructor(numberStr) {
    this.numberStr = this.isValidOctal(numberStr) ? numberStr : '0';
  }

  isValidOctal(numberStr) {
    if (numberStr.match(/[a-z89]/i)) {
      return false;
    } else {
      return true;
    }
  }

  toDecimal() {
    let numArray = this.numberStr.split('').reverse();

    return numArray.reduce((accum, numStr, idx) => {
      return accum + (Number(numStr) * (8 ** idx));
    }, 0);
  }
}

module.exports = Octal;