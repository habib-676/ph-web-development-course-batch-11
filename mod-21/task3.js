// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, len) {
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
  }
  return sum / len;
}

let arr = [10, 15, 20, 25, 30];
console.log(
  "The average of the array's element is ",
  make_avg(arr, arr.length)
);
