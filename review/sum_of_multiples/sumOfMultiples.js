'use strict';

class SumOfMultiples {
  static to(target) {
    return new SumOfMultiples().to(target);
  }

  constructor(...numbers) {
    this.set = (numbers.length > 0) ? numbers : [3, 5];
  }

  to(target) {
    let multiples = [0];

    this.set.forEach(element => {
      let num = element;
      while (num < target) {
        if (!multiples.includes(num)) {
          multiples.push(num);
        }
        num += element;
      }
    });

    return multiples.reduce((accum, val) => accum + val);
  }
}

module.exports = SumOfMultiples;

console.log(SumOfMultiples.to(10));