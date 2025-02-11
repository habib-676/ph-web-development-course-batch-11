const colors = ["red", "blue", "green", "yellow", "orange"];
let reverse = [];

for (let color of colors) {
  //   reverse.unshift(color);
  reverse = [color, ...reverse];
}
console.log(reverse);
