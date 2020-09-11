const ARROW = document.querySelector('.arrow');
const SPEED = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {

  console.log(data);

  SPEED.textContent = data.coords.speed;
  ARROW.style.transform = `rotate(${data.coords.heading}deg)`;
  
}, err => {

  alert('You need to allow access to your location');
  console.log(err);

});
