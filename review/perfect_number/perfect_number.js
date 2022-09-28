'use strict';

class PerfectNumber {
  static classify(number) {
    if (number < 0) throw new Error("invalid number!");

    let divisors = PerfectNumber.findDivisors(number);
    let sum = divisors.reduce((accum, val) => accum + val);

    if (sum < number) {
      return 'deficient';
    } else if (sum > number) {
      return 'abundant';
    } else {
      return 'perfect';
    }
  }

  static findDivisors(number) {
    let divisors = [];
    for (let count = 1; count < number; count += 1) {
      if (number % count === 0) {
        divisors.push(count);
      }
    }

    return divisors;
  }
}

module.exports = PerfectNumber;
