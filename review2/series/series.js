'use strict';

class Series {
  constructor(numStr) {
    this.numStr = numStr;
  }

  slices(length) {

    if (length > this.numStr.length) {
      throw new Error ('invalid slice length!');
    }
    let numArray = this.numStr.split('').map(numStr => Number(numStr));
    let startIdx = 0;
    let endIdx = length;
    let slices = [];

    while (endIdx < numArray.length + 1) {
      slices.push(numArray.slice(startIdx, endIdx));
      startIdx += 1;
      endIdx += 1;
    }

    return slices;
  }
}

module.exports = Series;