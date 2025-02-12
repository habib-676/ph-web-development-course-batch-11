// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function mulOrDivide(num) {
  let result;
  if (num % 2 === 0) {
    result = num / 2;
  } else {
    result = num * 2;
  }
  return result;
}

console.log("result", mulOrDivide(9));
