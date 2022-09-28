'use strict';

class Robot {
  static ALL_NAMES = [];
  static generateName() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let name = "";

    for (let num = 1; num <= 2; num += 1) {
      name += letters[Math.floor(Math.random() * (letters.length))];
    }

    for (let num = 1; num <= 3; num += 1) {
      name += numbers[Math.floor(Math.random() * (numbers.length))];
    }

    return this.ALL_NAMES.includes(name) ? this.generateName() : name;
  }

  constructor() {
    this.robotName = Robot.generateName();
    Robot.ALL_NAMES.push(this.robotName);
  }

  name() {
    return this.robotName;
  }

  reset() {
    Robot.ALL_NAMES.splice(Robot.ALL_NAMES.indexOf(this.name()), 1);
    this.robotName = Robot.generateName();
  }

}

module.exports = Robot;

console.log(Robot.generateName());