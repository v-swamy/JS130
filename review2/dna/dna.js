'use strict';

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(strand2) {
    let length = this.strand.length < strand2.length ?
      this.strand.length : strand2.length;
    let count = 0;

    for (let idx = 0; idx < length; idx += 1) {
      if (this.strand[idx] !== strand2[idx]) {
        count += 1;
      }
    }

    return count;
  }
}

module.exports = DNA;