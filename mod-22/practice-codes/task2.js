// You are given an array of numbers. Count how many times the a number is repeated in the array.

function findAndCount(arr, find) {
  let count = 0;
  for (let num of arr) {
    if (num === find) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5, 5];
const find = 5;

console.log(
  find,
  "contains it the given array ",
  findAndCount(numbers, find),
  "times"
);
