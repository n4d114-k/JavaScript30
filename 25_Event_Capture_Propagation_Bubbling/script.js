const DIVS = document.querySelectorAll('div');
const BUTTON = document.querySelector('button');


function logText(ev) {

  console.log(this.classList.value);
  //console.log(this);
  //ev.stopPropagation();

}

//document.body.addEventListener('click', logText);

DIVS.forEach(div => div.addEventListener('click', logText, {
  capture: true,
  //once: true
}));


BUTTON.addEventListener('click', () => {
  console.log('Click!');
}, {
  once: true
});
