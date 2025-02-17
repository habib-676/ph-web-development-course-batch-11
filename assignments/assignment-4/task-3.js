function electionResult(votes) {
  if (Array.isArray(votes) === false) {
    return "Invalid";
  } else {
    let mango = 0;
    let banana = 0;

    for (let vote of votes) {
      if (vote === "mango") {
        mango++;
      } else if (vote === "banana") {
        banana++;
      }
    }

    if (mango > banana) {
      return "Mango";
    } else if (banana > mango) {
      return "Banana";
    } else {
      return "Draw";
    }
  }
}

// ------------------------------------

const votes = ["mango", "banana", "mango", "banana", "mango"];
console.log(electionResult(votes));
