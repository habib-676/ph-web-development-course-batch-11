// conversion from inch to cm

function inchToCm(inch) {
  const cm = inch * 2.54;
  return cm;
}
const input = 1;
console.log(input, "inches= ", inchToCm(1), "cm");
