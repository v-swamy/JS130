'use strict'

class Triangle {
  constructor(...sides) {
    if (!this.isValidTriangle(sides)) {
      throw new Error("invalid triangle!");
    }
    this.sides = sides;
  }

  kind() {
    let [ side1, side2, side3 ] = this.sides;
    if (side1 === side2 && side2 === side3) {
      return "equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      return "isosceles";
    } else {
      return 'scalene';
    }
  }

  isValidTriangle(sides) {
    let [ side1, side2, side3 ] = sides;
    return (side1 + side2 > side3) && (side2 + side3 > side1) &&
           (side1 + side3 > side2) && (sides.every(side => side > 0));
  }
}

module.exports = Triangle;