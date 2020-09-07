const DOGS = [
  { name: 'Snickers', age: 2 },
  { name: 'Hugo', age: 8 }
];

function makeGreen() {

  const p = document.querySelector('p');

  p.style.color = '#BADA55';
  p.style.fontSize = '50px';

}

  // Regular

console.log('Hello');


  // Interpolated

const intrp = 'second interpolated';

console.log('Hello, I am a %s string', 'first interpolated');
console.log(`Hello, I am a ${intrp} string`)


  // Styled

console.log('%cI am blue text', 'color: blue');


  // warning!

console.warn('I am a warning');


  // Error :|

console.error('Shit!');


  // Info

console.info('Fun fact: Crocodiles eat 3-4 people per year');


  // Testing

const p = document.querySelector('p');

console.assert(p.classList.contains('some'), 'That is wrong!');


  // clearing

console.clear();


  // Viewing DOM Elements

console.log(p);
console.dir(p);

console.clear();


  // Grouping together

DOGS.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});


  // counting

console.count(DOGS[0].name);
console.count(DOGS[0].name);
console.count(DOGS[1].name);
console.count(DOGS[1].name);
console.count(DOGS[0].name);
console.count(DOGS[1].name);
console.count(DOGS[0].name);
console.count(DOGS[1].name);


  // making table

console.table(DOGS);


  // timing

console.time('fetching data');
fetch('https://api.github.com/users/n4d114-k')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});
