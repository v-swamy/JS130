//square.js

const { getNumbers } = require("./numbers");

function square(value) {
  return value * value;
}

function sumOfSquares() {
  return getNumbers().reduce((sum, number) => {
    return square(number) + sum;
  });
}

module.exports = sumOfSquares;