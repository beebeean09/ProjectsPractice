// Get our elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');
// Build out functions

function togglePlay() {
  console.log(event);
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
// Hook up event listeners
video.addEventListener('click', togglePlay);
