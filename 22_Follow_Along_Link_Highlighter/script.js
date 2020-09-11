const TRIGGERS = document.querySelectorAll('a');
const HIGHLIGHT = document.createElement('span');

HIGHLIGHT.classList.add('highlight');
document.body.appendChild(HIGHLIGHT);

function highlightLink() {

  const linkCoords =  this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  HIGHLIGHT.style.width = `${coords.width}px`;
  HIGHLIGHT.style.height = `${coords.height}px`;
  HIGHLIGHT.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

TRIGGERS.forEach(a => a.addEventListener('mouseenter', highlightLink));
