const PANELS = document.querySelectorAll('.panel');

function toggleOpen() {

  this.classList.toggle('open');

}

function toggleActive(ev) {

  if (/*ev.propertyName.includes('flex')*/ev.propertyName === 'flex-grow') {
    this.classList.toggle('open-active');
  }

}

PANELS.forEach(panel => panel.addEventListener('click', toggleOpen));

PANELS.forEach(panel => panel.addEventListener('transitionend', toggleActive));
