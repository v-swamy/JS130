"use strict";

class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(length) {
    if (length > this.digits.length) throw new Error("invalid length!");

    let digitArray = this.digits.split('').map(digit => Number(digit));
    let startIdx = 0;
    let endIdx = length;
    let results = [];

    while (endIdx <= this.digits.length) {
      results.push(digitArray.slice(startIdx, endIdx));
      startIdx += 1;
      endIdx += 1;
    }

    return results;
  }
}

module.exports = Series;

