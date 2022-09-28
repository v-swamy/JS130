'use strict';

class Series {
  constructor(digits) {
    this.digits = digits.split('').map(digit => Number(digit));
  }

  slices(length) {
    let result = [];
    let endIndex = this.digits.length;

    if (length > endIndex) throw new Error('Invalid slice length!');

    for (let startIndex = 0; startIndex <= endIndex - length; startIndex += 1) {
      result.push(this.digits.slice(startIndex, startIndex + length));
    }

    return result;
  }

}

module.exports = Series;
