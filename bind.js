function myBind(func, context, ...args) {
  return function() {
    return func.apply(context, [...args, ...arguments]);
  }
}

function addNumbers(a, b, c) {
  return a + b + c;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10, 10)); // 15