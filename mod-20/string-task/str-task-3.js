//  Check whether a string contains all the vowels a, e, i, o, u
let str = "Education";
str = str.toLowerCase();

if (str.includes("a" && "e" && "i" && "o" && "u")) {
  console.log("All vowels are found in this word");
} else {
  console.log("All vowels are not found in this word");
}

// for (let letter of str) {
//   if (letter == "a" && "e" && "i" && "o" && "u") {
//     console.log("All vowels are found in this word");
//   } else {
//     console.log("All vowels are not found in this word");
//   }
// }
