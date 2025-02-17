function calculateWatchTime(times) {
  let watchedTime = {
    hour: 0,
    minute: 0,
    second: 0,
  };
  let totalSeconds = 0;

  for (const time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
  }

  for (const time of times) {
    totalSeconds += time;
  }

  watchedTime.hour = Math.floor(totalSeconds / 3600);
  watchedTime.minute = Math.floor((totalSeconds % 3600) / 60);
  watchedTime.second = totalSeconds % 60;

  return watchedTime;
}

// -------------------------------------

console.log(calculateWatchTime([100, 3800, 90]));
