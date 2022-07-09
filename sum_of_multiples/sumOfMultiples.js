class SumOfMultiples {
  constructor(...args) {
    this.numbers = (args.length > 0) ? args : [3, 5];
  }

  static to(number) {
    let obj = new SumOfMultiples();
    return obj.to(number);
  }

  to(number) {
    let multiples = [];
    this.numbers.forEach(num => {
      let multiple = num;
      while (multiple < number) {
        if (!multiples.includes(multiple)) {
          multiples.push(multiple);
        }
        multiple += num;
      }
    });
    return multiples.reduce((accum, val) => accum + val, 0);
  }
}


module.exports = SumOfMultiples;