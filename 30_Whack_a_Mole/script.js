const HOLES = document.querySelectorAll('.hole');
const SCORE_BOARD = document.querySelector('.score');
const MOLES = document.querySelectorAll('.mole');


let lastHole;
let timeUp = false;
let score = 0;


function randomTime(min, max) {

  return Math.round(Math.random() * (max - min) + min);

}


function randomHole(holes) {

  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;

}


function peep() {

  const time = randomTime(200, 1000);
  const hole = randomHole(HOLES);

  hole.classList.add('up');
  setTimeout(() => {

    hole.classList.remove('up');
    if (!timeUp) peep();

  }, time);

}


function startGame() {

  SCORE_BOARD.textContent = 0;
  timeUp = false;
  score = 0;

  peep();
  setTimeout(() => timeUp = true, 10000);

}


function bonk(ev) {

  if (!ev.isTrusted) return;
  score++;

  this.parentNode.classList.remove('up');
  SCORE_BOARD.textContent = score;

}


MOLES.forEach(mole => mole.addEventListener('click', bonk));
