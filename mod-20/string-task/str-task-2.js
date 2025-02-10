//Count how many times a string has the letter a or A

let fullname = "hAAjfdlsa aA";
let str = fullname.toLowerCase();
let count = 0;
for (const letter of str) {
  if (letter == "a") {
    count++;
  }
}
console.log(`Letter "a" is found ${count} times`);
