// Write a function to find the longest word in a given string.

function longestWord(str) {
  const splittedStr = str.split(" ");
  let bigName = "";
  for (let word of splittedStr) {
    if (word.length > bigName.length) {
      bigName = word;
    }
  }
  console.log("'", bigName, "'", "is the largest word !!!!");
}

const str = "I am learning Programming to become a programmer";

longestWord(str);
