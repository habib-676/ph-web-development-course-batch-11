/*
Write a function called count_zero() which will take a binary string (Binary string is a string 
which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(str) {
  let count = 0;
  for (let bin of str) {
    if (bin == "0") {
      count++;
    }
  }
  return count;
}
let str = "1011011101110000111110011";
console.log("There are ", count_zero(str), "zero's in the string");
