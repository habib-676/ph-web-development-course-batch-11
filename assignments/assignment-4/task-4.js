function isBestFriend(f1, f2) {
  if (
    typeof f1 !== "object" ||
    typeof f2 !== "object" ||
    Array.isArray(f1) === true ||
    Array.isArray(f2) === true
  ) {
    return "Invalid";
  } else {
    if (f1.bestFriend === f2.roll && f1.roll === f2.bestFriend) {
      return true;
    } else {
      return false;
    }
  }
}

// -------------------------------

console.log(
  isBestFriend(
    { name: "hashem", roll: 1, bestFriend: 1 },
    { name: "kashem", roll: 1, bestFriend: 1 }
  )
);
