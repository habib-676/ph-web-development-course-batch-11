// function

function oddAvg(arr) {
  let oddArr = [];
  let sum = 0;

  for (const num of arr) {
    if (num % 2 === 1) {
      oddArr.push(num);
    }
  }

  for (const num of oddArr) {
    sum = sum + num;
  }

  return sum / oddArr.length; /* average */
}
const arr = [10, 15, 20, 25, 30, 35, 40, 45];

console.log("Average of the odd numbers of the array is =", oddAvg(arr));
