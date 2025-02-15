// Find the smallest name.

const names = ["rahim", "robin", "rafi", "ron", "rashed"];
let smallest = names[0];

for (const name of names) {
  if (name.length < smallest.length) {
    smallest = name;
  }
}

console.log(smallest);
