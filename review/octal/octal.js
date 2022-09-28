'use strict';

class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    if (!this.isValidOctal()) return 0;
    let octalArray = this.octal.split('').reverse();
    let decimal = octalArray.reduce((accum, val, idx) =>
      accum + (Number(val) * (8 ** idx)), 0);
    return decimal;
  }

  isValidOctal() {
    let invalidChars = /[a-z89]/i;
    return !invalidChars.test(this.octal);
  }

}

module.exports = Octal;
