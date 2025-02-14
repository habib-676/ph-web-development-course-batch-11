// Write a function to convert temperature from Celsius to Fahrenheit.

function temConvert(cel) {
  const far = cel * 1.8 + 32;
  return far;
}

const cel = 33;
console.log(cel, "degree celsius = ", temConvert(cel), "degree fahrenheit");
