const VIDEO = document.querySelector('.flex');
const SPEED = document.querySelector('.speed');
const BAR = SPEED.querySelector('.speed-bar');


function handleMove(ev) {

  const y = ev.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.5;
  const max = 3;
  const height = `${Math.round(percent * 100)}%`;
  const playbackRate = percent * (max - min) + min;

  BAR.style.height = height;
  BAR.textContent = `${playbackRate.toFixed(1)}×`;
  VIDEO.playbackRate = playbackRate;

}


SPEED.addEventListener('mousemove', handleMove);
