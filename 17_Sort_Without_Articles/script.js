const BANDS = ['The Plot in You', 'The Devil Wears Prada', 'The Bled',
              'Anywhere But Here', 'Pierce the Veil', 'Say Anything',
              'The Midway State', 'We Came as Romans', 'Counterparts',
              'Oh, Sleeper', 'A Skylit Drive', 'Norma Jean', 'An Old Dog'];
const SORTED_BANDS = BANDS.sort((a, b) => strip(a) > strip(b) ? 1 : -1);


function strip(bandName) {

  return bandName.replace(/^(a |the |an )/i, '').trim();

}

document.querySelector('#bands').innerHTML =
  SORTED_BANDS
    .map(band => `<li>${band}</li>`)
    .join('');
