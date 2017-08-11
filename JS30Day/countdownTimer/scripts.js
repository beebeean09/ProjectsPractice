let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

  // Giving setInterval a variable so we can clear it at 0 secs
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we need to stop by seeing if < 0
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
    console.log(secondsLeft);
  }, 1000);
}
