// Elements

const PLAYER = document.querySelector('.player');
const VIDEO = PLAYER.querySelector('.viewer');
const PROGRESS = PLAYER.querySelector('.progress');
const PROGRESS_BAR = PLAYER.querySelector('.progress__filled');
const TOGGLE = PLAYER.querySelector('.toggle');
const SKIP_BUTTONS = PLAYER.querySelectorAll('[data-skip]');
const RANGES = PLAYER.querySelectorAll('.player__slider');


// Functions

function togglePlay() {
  const method = VIDEO.paused ? 'play' : 'pause';
  VIDEO[method]();
}

function updateButton() {
  const icon = this.paused ? '▶' : '❚❚';
  TOGGLE.textContent = icon;
}

function skip() {
 VIDEO.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  VIDEO[this.name] = this.value;
}

function handleProgress() {
  const percent = (VIDEO.currentTime / VIDEO.duration) * 100;
  PROGRESS_BAR.style.flexBasis = `${percent}%`;
}

function scrub(ev) {
  const scrubTime = (ev.offsetX / PROGRESS.offsetWidth) * VIDEO.duration;
  VIDEO.currentTime = scrubTime;
}


// Event Listeners

VIDEO.addEventListener('click', togglePlay);
VIDEO.addEventListener('play', updateButton);
VIDEO.addEventListener('pause', updateButton);
VIDEO.addEventListener('timeupdate', handleProgress);

TOGGLE.addEventListener('click', togglePlay);
SKIP_BUTTONS.forEach(button => button.addEventListener('click', skip));
RANGES.forEach(range => range.addEventListener('change', handleRangeUpdate));
RANGES.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
PROGRESS.addEventListener('click', scrub);
PROGRESS.addEventListener('mousemove', (ev) => mousedown && scrub(ev));
PROGRESS.addEventListener('mousedown', () => mousedown = true);
PROGRESS.addEventListener('mouseup', () => mousedown = false);
