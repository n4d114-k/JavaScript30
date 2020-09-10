const VIDEO = document.querySelector('.player');
const CANVAS = document.querySelector('.photo');
const CTX = CANVAS.getContext('2d');
const STRIP = document.querySelector('.strip');
const SNAP = document.querySelector('.snap');


function getVideo() {

  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  }).then(localMediaStream => {

    console.log(localMediaStream);

    VIDEO.srcObject = localMediaStream;
    VIDEO.play();

  }).catch(err => {
    console.error('On no!!!', err);
  });

}


function paintToCanvas() {

  const width = VIDEO.videoWidth;
  const height = VIDEO.videoHeight;
  CANVAS.width = width;
  CANVAS.height = height;

  return setInterval(() => {

    CTX.drawImage(VIDEO, 0, 0, width, height);

    let pixels = CTX.getImageData(0, 0, width, height);

    pixels = rgbSplit(pixels);

    CTX.globalAlpha = 0.1;

    CTX.putImageData(pixels, 0, 0);

  }, 16);

}


function takePhoto() {

  SNAP.currentTime = 0;
  SNAP.play();

  const data = CANVAS.toDataURL('image/jpeg');
  const link = document.createElement('a');

  link.href = data;
  link.setAttribute('download', 'photo');
  link.innerHTML = `<img src="${data}" alt="photo" />`;
  STRIP.insertBefore(link, STRIP.firstChild);

}


function rgbSplit(pixels) {

  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // red
    pixels.data[i + 500] = pixels.data[i + 1]; // green
    pixels.data[i - 550] = pixels.data[i + 2]; // blue
  }

  return pixels;

}

getVideo();

VIDEO.addEventListener('canplay', paintToCanvas);
