// Write a function to count the number of vowels in a string.
function countVowels(str) {
  let count = 0;
  for (let letter of str) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;
    }
  }
  return count;
}

const userName = "Habibur RahmAn";
console.log(countVowels(userName.toLowerCase()));
