setInterval(function(){
  let a = document.getElementById('blink').style.opacity || 1;
  document.getElementById('blink').style.opacity = ((parseInt(a))?0:1);
},1000);


// start with strings, numbers and booleans

let age = 50;
let age2 = age;
console.log(age, age2);
age = 75;
console.log(age, age2);

let name = 'John';
let name2 = name;
console.log(name, name2);
name = 'Joe';
console.log(name, name2);


  // Let's say we have an array

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];


  // and we want to make a copy of it.

const team = players;

console.log(`${typeof players} players: ${players},\n${typeof team} team: ${team}`);


  // You might think we can just do something like this:

team[3] = 'Lux';

console.log(`after updating:\n${typeof team} team: ${team}\n${typeof players} players: ${players}`);


  // however what happens when we update that array?

  // now here is the problem!

  // oh no - we have edited the original array too!

  // Why? It's because that is an array reference, not an array copy. They both point to the same array!

  // So, how do we fix this? We take a copy instead!

  // one way

const team2 = players.slice();

console.log(`${typeof team2} team2: ${team2}`)


  // or create a new array and concat the old one in

const team3 = [].concat(players);

console.log(`${typeof team3} team3: ${team3}`)


  // or use the new ES6 Spread

const team4 = [...players];

console.log(`${typeof team4} team4: ${team4}`)


  // now when we update it, the original one isn't changed

team4[3] = 'Thomas'
console.log(`${typeof team4} team4: ${team4}`);
console.log(`${typeof players} players: ${players}`);

const team5 = Array.from(players);
console.log(`${typeof team5} team5: ${team5}`)
team5[3] = 'Ashley'
console.log(`${typeof team5} team5: ${team5}`);
console.log(`${typeof players} players: ${players}`);


  // The same thing goes for objects, let's say we have a person object

const person = {
  name: 'John Smith',
  age: 80
};

console.log(`${typeof person} person:`, person)

  // and think we make a copy:

const captain = person;
console.log(`${typeof captain} captain:`, captain)

captain.age = 99;
console.log(`${typeof person} person:`, person)
console.log(`${typeof captain} captain:`, captain)


  // how do we take a copy instead?

const captain2 = Object.assign({}, person, {age: 65});
console.log(`${typeof captain2} captain2:`, captain2);
console.log(`${typeof person} person:`, person)


  // We will hopefully soon see the object ...spread

  const captain3 = {...person};
  console.log(`${typeof captain3} captain3:`, captain3);


  // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const joeSmith = {
  name: 'Joe Smith',
  age: 50,
  social: {
    twitter: '@joesmith',
    facebook: 'joe.smith'
  }
};

console.log(`${typeof joeSmith} joeSmith:`, joeSmith);

const dev = Object.assign({}, joeSmith);
console.log(`${typeof dev} dev:`, dev);
dev.name = 'Wesley Cooper';
console.log(`${typeof dev} dev:`, dev);
console.log(`${typeof joeSmith} joeSmith:`, joeSmith);

const dev2 = JSON.parse(JSON.stringify(joeSmith));
console.log(`${typeof dev2} dev2:`, dev2);
dev2.name = 'Madison Cooper';
dev2.social.twitter = '@maddy';
console.log(dev2);
