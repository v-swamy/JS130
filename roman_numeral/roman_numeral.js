class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  constructor(num) {
    this.number = num;
  }

  toRoman() {
    let result = '';
    let number = this.number;

    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(letter => {
      while (number >= RomanNumeral.ROMAN_NUMERALS[letter]) {
        result += letter;
        number -= RomanNumeral.ROMAN_NUMERALS[letter];
      }
    });

    return result;
  }
}

module.exports = RomanNumeral;

// let number = new RomanNumeral(1);
// console.log(number.toRoman());

// let number = new RomanNumeral(2);
// console.log(number.toRoman());

// let number = new RomanNumeral(3000);
// console.log(number.toRoman());