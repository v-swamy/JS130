const Car = require("./car");

// eslint-disable-next-line max-lines-per-function
describe("The Car class", () => {
  test("has four wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });

  // test("bad wheels", () => {
  //   let car = new Car();
  //   expect(car.wheels).toBe(3);
  // });

  test('two new cars are equal objects', () => {
    let car1 = new Car();
    let car2 = new Car();

    expect(car1).toEqual(car2);
  });

  test('does not have doors', () => {
    let car = new Car();
    expect(car.doors).toBeUndefined();
  });

  test('raises a TypeError when called drive on it', () => {
    let car = new Car();
    expect(() => car.drive()).toThrow(TypeError);
  });

  test('a new car has no mileage info', () => {
    let car = new Car();
    expect(car.mileageInfo).toBeNull();
  });

  test('wheels is truthy', () => {
    let car = new Car();
    expect(car.wheels).toBeTruthy();
  });

  test('array contains car', () => {
    let car = new Car();
    let arr = [1, 2, 3];
    arr.push(car);

    expect(arr).toContain(car);
  });

  test('string contains "car"', () => {
    let man = "His cars have healed";

    expect(man).toContain("car");
  });

  test('car has wheels', () => {
    let car = new Car();
    expect(car.wheels).not.toBeUndefined();
  });
});