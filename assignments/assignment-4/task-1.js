function cashOut(money) {
  if (typeof money !== "number") {
    return "Invalid";
  } else if (money < 0) {
    return "Invalid";
  } else {
    const result = (money * 1.75) / 100;
    return result;
  }
}

// ------------------------------------------------------------------------------
const money = "100";
// console.log(money);
console.log(cashOut(money));
