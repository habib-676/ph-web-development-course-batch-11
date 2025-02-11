// Use a for...of loop to concatenate all the elements of an array into a single string.

var names = ["Tom", "Tim", "Tin", "Tik"];
let singleStr = "";

for (let name of names) {
  singleStr = singleStr + name;
}

console.log(singleStr);
