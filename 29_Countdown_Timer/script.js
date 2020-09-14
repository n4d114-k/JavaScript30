const TIMER_DISPLAY = document.querySelector('.display__time-left');
const END_TIME = document.querySelector('.display__end-time');
const BUTTONS = document.querySelectorAll('[data-time]');


let countdown;


function timer(seconds){

  clearInterval(countdown);

  const now = Date.now();
  const then = now +  seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {

    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);

}


function displayTimeLeft(seconds) {

  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  document.title = display;
  TIMER_DISPLAY.textContent = display;

}


function displayEndTime(timestamp) {

  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHour = hour > 12 ? hour - 12 : hour;

  END_TIME.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;

}


function startTimer() {

  const seconds = parseInt(this.dataset.time);

  timer(seconds);

}


function startCustomTimer(ev) {

  ev.preventDefault();

  const mins = this.minutes.value;

  timer(mins * 60);
  this.reset();

}


BUTTONS.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', startCustomTimer);
