const score = prompt("Enter your score");

if (score > 90) {
  document.write("Your grade is A");
} else if (score > 79 && score < 90) {
  document.write("Your grade is B");
} else if (score > 69 && score < 80) {
  document.write("Your grade is C");
} else if (score > 59 && score < 70) {
  document.write("Your grade is D");
} else {
  document.write("You are failed ");
}
