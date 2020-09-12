const MSG = new SpeechSynthesisUtterance();
const VOICES_DROPDOWN = document.querySelector('[name="voice"]');
const OPTIONS = document.querySelectorAll('[type="range"], [name="text"]');
const SPEAK_BUTTON = document.querySelector('#speak');
const STOP_BUTTON = document.querySelector('#stop');


MSG.text = document.querySelector('[name="text"]').value;

let voices = [];


function populateVoices() {

  voices = this.getVoices();

  VOICES_DROPDOWN.innerHTML = voices
      .filter(voice => voice.lang.includes('en') || voice.lang.includes('ru'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');

}

function setVoice() {

  MSG.voice = voices.find(voice => voice.name === this.value);

  toggle();

}

function toggle(startOver = true) {

  speechSynthesis.cancel();

  if (startOver) {
    speechSynthesis.speak(MSG);
  }
}

function setOption() {

  MSG[this.name] = this.value;

  toggle();
  
}


speechSynthesis.addEventListener('voiceschanged', populateVoices);

VOICES_DROPDOWN.addEventListener('change', setVoice);
OPTIONS.forEach(option => option.addEventListener('change', setOption));
SPEAK_BUTTON.addEventListener('click', toggle);
STOP_BUTTON.addEventListener('click', toggle.bind(null, false));
