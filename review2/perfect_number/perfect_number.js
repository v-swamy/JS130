'use strict';

class PerfectNumber {
  static classify(number) {
    if (number < 0) throw new Error("invalid number!");

    let divisors = [];
    let count = 1;

    while (count <= (number / 2)) {
      if (!divisors.includes(count) && number % count === 0) {
        divisors.push(count);
      }
      count += 1;
    }

    let sum = divisors.reduce((accum, val) => accum + val);

    if (sum < number) {
      return 'deficient';
    } else if (sum > number) {
      return 'abundant';
    } else {
      return 'perfect';
    }
  }
}

module.exports = PerfectNumber;