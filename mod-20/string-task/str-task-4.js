// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let str1 = "this is xx & XX text";

let str2 = str1.replace(/x/g, "y").replace(/X/g, "Y");

console.log(str2);
