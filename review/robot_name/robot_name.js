'use strict';

class Robot {
  static names = [];

  static generateName() {
    let name = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    name += this.selectFrom(letters, 2);
    name += this.selectFrom(numbers, 3);
    return this.names.includes(name) ? this.generateName() : name;
  }

  static selectFrom(string, count) {
    let result = "";
    for (let num = 1; num <= count; num += 1) {
      result += string[(Math.floor(Math.random() * (string.length)))];
    }
    return result;
  }

  constructor() {
    this.robotName = Robot.generateName();
    Robot.names.push(this.robotName);
  }

  name() {
    return this.robotName;
  }

  reset() {
    Robot.names.splice(Robot.names.indexOf(this.name()), 1);
    this.robotName = Robot.generateName();
  }
}

module.exports = Robot;

let robot = new Robot();
console.log(robot.name());