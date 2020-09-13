const SLIDER = document.querySelector('.items');


let isDown = false;
let startX;
let scrollLeft;


function onMouseDownAddClass(ev) {

  isDown = true;

  SLIDER.classList.add('active');

  startX = ev.pageX - SLIDER.offsetLeft;
  scrollLeft = SLIDER.scrollLeft;

}


function onMouseleaveRemoveClass() {

  isDown = false;

  SLIDER.classList.remove('active');

}


function onMouseUpRemoveClass() {

  isDown = false;

  SLIDER.classList.remove('active');

}


function slide(ev) {

  if (!isDown) return;
  ev.preventDefault();

  const x = ev.pageX - SLIDER.offsetLeft;
  const walk = (x - startX) * 3;

  SLIDER.scrollLeft = scrollLeft - walk;

}


SLIDER.addEventListener('mousedown', onMouseDownAddClass);
SLIDER.addEventListener('mouseleave', onMouseleaveRemoveClass);
SLIDER.addEventListener('mouseup', onMouseUpRemoveClass);
SLIDER.addEventListener('mousemove', slide);
