/* 
    Find the lowest number in the array below.
*/

// method 1

const heights2 = [167, 190, 120, 165, 137];
console.log(Math.min(...heights2));

// method 2:
let minimum = heights2[0];
for (let num of heights2) {
  if (num < minimum) {
    minimum = num;
  }
}
console.log(minimum);
