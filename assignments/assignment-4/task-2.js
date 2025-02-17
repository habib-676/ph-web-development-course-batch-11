function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  } else {
    if (
      email.charAt(0) === "." ||
      email.charAt(0) === "-" ||
      email.charAt(0) === "_" ||
      email.charAt(0) === "+" ||
      email.charAt(0) === "@"
    ) {
      return false;
    } else if (!email.includes("@")) {
      return false;
    } else if (email.includes(" ")) {
      return false;
    } else if (!email.endsWith(".com")) {
      return false;
    } else {
      return true;
    }
  }
}

// ---------------------
const email = "he ro@alom.com";
console.log(validEmail(email));
