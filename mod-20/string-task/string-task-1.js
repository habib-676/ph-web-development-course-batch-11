// Count how many times a string has the letter a

let fullname = "hAAjfdlsa A";
let str = fullname.toLocaleLowerCase();
let count = 0;
for (const letter of str) {
  if (letter == "a") {
    count++;
  }
}
console.log(`Letter "a" is found ${count} times`);
