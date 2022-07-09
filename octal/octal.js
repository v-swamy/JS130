'use strict';

class Octal {
  constructor(string) {
    this.number = string;
  }

  toDecimal() {
    if (this.isInvalidOctal()) return 0;

    let array = this.number.split('').reverse();
    return array.reduce((accum, val, idx) => accum + (val * (8 ** idx)), 0);
  }

  isInvalidOctal() {
    let validChars = /[^0-7]/;
    return validChars.test(this.number);
  }
}

module.exports = Octal;