let weight = prompt("Enter your weight in KG");
let height = prompt("Enter your height in meter");

let bmi = weight / (height * height);

document.write(`Your BMI is= ${bmi} <br>`);
if (bmi < 18.5) {
  document.write("You are underweight");
} else if (bmi >= 18.5 && bmi <= 24.5) {
  document.write("You are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  document.write("You are overweight.");
} else {
  document.write("You are obese");
}
