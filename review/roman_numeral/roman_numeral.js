class RomanNumeral {

  static conversion = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ]

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let roman = '';
    let number = this.number;

    RomanNumeral.conversion.forEach((numeral => {
      while (number >= numeral[1]) {
        roman += numeral[0];
        number -= numeral[1];
      }
    }));

    return roman;
  }
}

let number = new RomanNumeral(27);
console.log(number.toRoman());

module.exports = RomanNumeral;