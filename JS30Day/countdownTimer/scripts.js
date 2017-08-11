let countdown;
const timerDisplay = document.querySelector('.display-time-left');
const endTime = document.querySelector('.display-end-time');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  // Need this here since the interval wont countdown until after 1 sec
  displayTimeLeft(seconds);
  displayEndTime(then);
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
  const display = `${minutes < 10 ? '0': ''}${minutes}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHour = hour > 12 ? 24 - hour : hour;
  endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0': ''}${minutes}.`;

}
