const HERO = document.querySelector('.hero');
const TEXT = HERO.querySelector('h1');
const MOVE = 250; // px

function makeShadow(ev) {

  const { offsetWidth: width,
          offsetHeight: height } = HERO;
  let { offsetX: x,
        offsetY: y } = ev;

  if (this !== ev.target) {
    x = x + ev.target.offsetLeft;
    y = y + ev.target.offsetTop;
  }

  const xMove = Math.round((x / width * MOVE) - (MOVE / 2));
  const yMove = Math.round((y / height * MOVE) - (MOVE / 2));

  TEXT.style.textShadow = `
    ${xMove}px ${yMove}px 3px rgba(255,0,255,0.7),
    ${xMove * -1}px ${yMove}px 3px rgba(0,255,255,0.6),
    ${yMove}px ${xMove * -1}px 3px rgba(255,0,0,0.6),
    ${yMove * -1}px ${xMove}px 3px rgba(225,225,0,0.7)
  `;

}

HERO.addEventListener('mousemove', makeShadow);
