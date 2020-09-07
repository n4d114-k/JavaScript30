const CANVAS = document.querySelector('#draw');
const CTX = CANVAS.getContext('2d');

CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

CTX.strokeStyle = '#BADA55';
CTX.lineJoin = 'round';
CTX.lineCap = 'round';
CTX.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(ev) {

  if (!isDrawing) return;

  CTX.strokeStyle = `hsl(${hue}, 60%, 40%)`;

  CTX.beginPath();
  CTX.moveTo(lastX, lastY);
  CTX.lineTo(ev.offsetX, ev.offsetY);
  CTX.stroke();

  [lastX, lastY] = [ev.offsetX, ev.offsetY];

  hue++;

  if (hue >= 360) {
    hue = 0;
  }

  if (CTX.lineWidth >= 100 || CTX.lineWidth <= 15) {
    direction = !direction;
  }

  if (direction) {
    CTX.lineWidth++;
  } else {
    CTX.lineWidth--;
  }

}

CANVAS.addEventListener('mousedown', ev => {
  isDrawing = true;
  [lastX, lastY] = [ev.offsetX, ev.offsetY];
});

CANVAS.addEventListener('mousemove', draw);
CANVAS.addEventListener('mouseup', () => isDrawing = false);
CANVAS.addEventListener('mouseout', () => isDrawing = false);
