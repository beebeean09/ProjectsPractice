let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  // Need this here since the interval wont countdown until after 1 sec
  displayTimeLeft(seconds);

  // Giving setInterval a variable so we can clear it at 0 secs
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we need to stop by seeing if < 0
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSecs = (seconds % 60);
}
