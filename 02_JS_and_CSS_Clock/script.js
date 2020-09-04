const SECONDS_HAND = document.querySelector('.second-hand');
const MINS_HAND = document.querySelector('.min-hand');
const HOURS_HAND = document.querySelector('.hour-hand');

function setDate() {

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  SECONDS_HAND.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;

  MINS_HAND.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360) + 90;

  HOURS_HAND.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);

setDate();
