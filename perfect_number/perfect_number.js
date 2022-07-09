class PerfectNumber {

  static classify(num) {
    if (num < 1) throw new Error('invalid number!');

    let sumOfDivisors = 0;

    for (let div = 1; div <= (num / 2); div += 1) {
      if (num % div === 0) {
        sumOfDivisors += div;
      }
    }

    if (sumOfDivisors < num) {
      return 'deficient';
    } else if (sumOfDivisors > num) {
      return 'abundant';
    } else {
      return 'perfect';
    }

  }
}

module.exports = PerfectNumber;