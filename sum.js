var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// }

sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);