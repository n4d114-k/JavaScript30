const TOTALS_DIV = document.querySelector('.total');
const TIME_NODES = Array.from(document.querySelectorAll('[data-time]'));
const SECONDS = TIME_NODES
      .map(node => node.dataset.time)
      .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
      })
      .reduce((total, vidSeconds) => total + vidSeconds);


let secondsLeft = SECONDS;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`${typeof SECONDS} SECONDS: ${SECONDS}`);
console.log(`In total: ${hours}:${mins}:${secondsLeft}`);


TOTALS_DIV.innerHTML =
  `<p>Videos total duration: ${hours}:${mins}:${secondsLeft}</p>`;

TOTALS_DIV.style.marginTop = '3.5em';
TOTALS_DIV.style.color = '#BADA55';
