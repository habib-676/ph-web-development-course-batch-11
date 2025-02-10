// Count how many times a string has the letter a

let fullname = "hAAjfdlsa A";
let count = 0;
for (const letter of fullname) {
  if (letter == "a") {
    count++;
  }
}
console.log(`Letter "a" is found ${count} times`);
