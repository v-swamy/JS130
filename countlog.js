"use strict";

function makeCounterLogger(firstNum) {
  return function(secondNum) {
    let num = firstNum;
    if (num < secondNum) {
      do {
        console.log(num);
        num += 1;
      } while (num <= secondNum);
    } else {
      do {
        console.log(num);
        num -= 1;
      } while (num >= secondNum);
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);

countlog(2);