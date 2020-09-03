function playSound(elem) {

  const audio = document.querySelector(`audio[data-key="${elem.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${elem.keyCode}"]`);

  if(!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

}

function removeTransition(elem) {

  if (elem.propertyName !== 'transform') {
    return;
  } else {
    this.classList.remove('playing');
  }
  
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
