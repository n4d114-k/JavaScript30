setInterval(function(){
  let a = document.getElementById('blink').style.opacity || 1;
  document.getElementById('blink').style.opacity = ((parseInt(a))?0:1);
},1000);

// ## Array Cardio Day 2

const PEOPLE = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const COMMENTS = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?

const isAdult = PEOPLE.some(person => {

  const currentYear = (new Date()).getFullYear();

  return currentYear - person.year >= 19;

});

console.log({isAdult});


  // Array.prototype.every() // is everyone 19 or older?

  const allAdults = PEOPLE.every(person => {

    const currentYear = (new Date()).getFullYear();

    return currentYear - person.year >= 19;

  });

  console.log({allAdults});


  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  const comment = COMMENTS.find(comment => comment.id === 823423);

  console.log(comment);


  // Array.prototype.findIndex()
  // Find the comment with this ID

  const index = COMMENTS.findIndex(comment => comment.id === 823423);
  console.log(index);


  // delete the comment with the ID of 823423

const newComments = [
  ...COMMENTS.slice(0, index),
  ...COMMENTS.slice(index + 1)
];

console.log(COMMENTS);
console.log(newComments);
