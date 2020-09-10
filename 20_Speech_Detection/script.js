window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const RECOGNITION = new SpeechRecognition();
const WORDS = document.querySelector('.words');

RECOGNITION.interimResults = true;
RECOGNITION.lang = 'uk-UA';

let p = document.createElement('p');
WORDS.appendChild(p);

RECOGNITION.addEventListener('result', ev => {

  const transcript = Array.from(ev.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

  p.textContent = transcript;

  if (ev.results[0].isFinal) {
    p = document.createElement('p');
    WORDS.appendChild(p);
  }

  if (transcript.includes('привіт')) {
    p = document.createElement('p');
    p.textContent = 'Вітаємо на сторінці Speech Recognition!';
    WORDS.appendChild(p);
    console.log('Welcome to Speech Recognition Page!');
  }

  console.log(transcript);

});

RECOGNITION.addEventListener('end', RECOGNITION.start);
RECOGNITION.start();
