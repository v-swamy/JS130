class Triangle {
  constructor(...sides) {
    if (this.triangleIsValid(...sides)) {
      this.side1 = sides[0];
      this.side2 = sides[1];
      this.side3 = sides[2];
    }
  }

  kind() {
    if (this.side1 === this.side2 &&
        this.side2 === this.side3) {
      return 'equilateral';
    } else if (this.side1 === this.side2 ||
      this.side2 === this.side3 ||
      this.side1 === this.side3) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  triangleIsValid(...sides) {
    if (sides.every(side => side > 0) &&
        sides[0] + sides[1] > sides[2] &&
        sides[1] + sides[2] > sides[0] &&
        sides[2] + sides[0] > sides[1]) {
      return true;
    } else {
      throw new Error("Invalid triangle!");
    }
  }
}

let tri = new Triangle(2, 2, 2);

module.exports = Triangle;