const ENDPOINT = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const SEARCH_INPUT = document.querySelector('.search');
const SUGGESTIONS = document.querySelector('.suggestions');
const CITIES = [];

fetch(ENDPOINT)
    .then(blob => blob.json())
    .then(data => CITIES.push(...data));

function findMatches(wordToMatch, CITIES) {

  return CITIES.filter(place => {
    const cityRegex = new RegExp(wordToMatch, 'gi');
    return place.city.match(cityRegex) || place.state.match(cityRegex);
  });

}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {

  const matchArray = findMatches(this.value, CITIES);

  const html = matchArray.map(place => {

    const cityRegex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(cityRegex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(cityRegex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;

  }).join('');

  SUGGESTIONS.innerHTML = html;

}

SEARCH_INPUT.addEventListener('change', displayMatches);

SEARCH_INPUT.addEventListener('keyup', displayMatches);
