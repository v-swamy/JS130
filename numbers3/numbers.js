//numbers.js

let numbers = [];

function addNumber(value) {
  numbers.push(value);
}

function getNumbers() {
  return [...numbers];
}

module.exports = { addNumber, getNumbers };