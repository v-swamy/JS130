"use strict";

let Robot = (function() {
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const DIGITS = "0123456789";

  function generateName() {
    let name = "";
    for (let counter = 1; counter <= 2; counter += 1) {
      name += pickFrom(LETTERS);
    }

    for (let counter = 1; counter <= 3; counter += 1) {
      name += pickFrom(DIGITS);
    }
    return name;
  }

  function pickFrom(string) {
    let index = Math.floor(Math.random() * (string.length + 1));
    return string[index];
  }

  return class {

    static names = [];

    name() {
      if (this.robotName) {
        return this.robotName;
      } else {
        do {
          this.robotName = generateName();
        } while (Robot.names.includes(this.robotName));
        Robot.names.push(this.robotName);
        return this.robotName;
      }
    }

    reset() {
      let index = Robot.names.indexOf(this.robotName);
      Robot.names.splice(index, 1);
      this.robotName = null;
    }
  };
})();

module.exports = Robot;

