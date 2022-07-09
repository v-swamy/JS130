var bar = 'hello';

console.log(bar);

// bar();             // raises "TypeError: bar is not a function"

function bar() {
  console.log('world');
}