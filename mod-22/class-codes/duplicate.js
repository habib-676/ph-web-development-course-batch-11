// remove inputted values if there any repeated entries in an array

function filter(arr) {
  let newArr = [];
  for (const single of arr) {
    if (!newArr.includes(single)) {
      newArr.push(single);
    }
  }
  return newArr;
}
const arr = ["habib", "hamim", "hasib", "hamim", "habib", "nasir"];

console.log(filter(arr));
