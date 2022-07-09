class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    if (!this.isValidTriangle()) {
      throw new Error("Invalid side length!");
    }
  }

  kind() {
    let sideCounter = {};
    this.sides().forEach(side => {
      if (Object.keys(sideCounter).includes(String(side))) {
        sideCounter[String(side)] += 1;
      } else {
        sideCounter[String(side)] = 1;
      }
    });

    if (Object.values(sideCounter).includes(2)) {
      return "isosceles";
    } else if (Object.values(sideCounter).includes(3)) {
      return "equilateral";
    } else {
      return "scalene";
    }
  }

  sides() {
    return [this.side1, this.side2, this.side3]
      .sort((side1, side2) => side1 - side2);
  }

  isValidTriangle() {
    let sides = this.sides();
    if (sides.some(side => side <= 0) ||
        ((sides[0] + sides[1]) <= sides[2])) {
      return false;
    }
    return true;
  }
}

module.exports = Triangle;

// const triangle = new Triangle(2, 2, 2);
// console.log(triangle.kind());

// const triangle2 = new Triangle(10, 10, 10);
// console.log(triangle2.kind());

// const triangle3 = new Triangle(3, 4, 4);
// console.log(triangle3.kind());

// const triangle4 = new Triangle(4, 3, 4);
// console.log(triangle4.kind());

// const triangle5 = new Triangle(4, 4, 3);
// console.log(triangle5.kind());

// const triangle6 = new Triangle(10, 10, 2);
// console.log(triangle6.kind());

// const triangle7 = new Triangle(3, 4, 5);
// console.log(triangle7.kind());

// const triangle8 = new Triangle(10, 11, 12);
// console.log(triangle8.kind());

// const triangle9 = new Triangle(5, 4, 2);
// console.log(triangle9.kind());

// const triangle10 = new Triangle(0.4, 0.6, 0.3);
// console.log(triangle10.kind());

// // const triangle11 = new Triangle(0, 0, 0);
// // const triangle11 = new Triangle(3, 4, -5);
// // const triangle11 = new Triangle(1, 1, 3);
// // const triangle11 = new Triangle(7, 3, 2);
// // const triangle11 = new Triangle(10, 1, 3);
// const triangle11 = new Triangle(1, 1, 2);