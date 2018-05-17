
## JavaScript-s

<details>
<summary>
Loops Arrays Objects
</summary>

```js
var sports = ['football', 'tennis', 'rugby'];
var firstSport = sports[0];
var secondSport = sports[1];

sports.push('curling');

sports.push('snooker');
sports.push('darts');

var lastSport = sports[sports.length - 1];

sports.pop()

sports.unshift('basketball');

sports.shift();

sports.splice(3, 1);

// console.log(sports);

for (var currentSport of sports) {
  var bigSport = currentSport.toUpperCase();
  // console.log( bigSport );
}

for (var i = 0; i < sports.length; i++) {
  var currentSport = sports[i];
  var bigSport = currentSport.toUpperCase();
  // console.log( bigSport );
}

for (var i = sports.length - 1; i >= 0; i--) {
  var currentSport = sports[i];
  var bigSport = currentSport.toUpperCase();
  // console.log( bigSport );
}

var movie = {
  title: 'It\'s a Wonderful Life',
  year: 1946,
  language: 'Spanish'
};

var moviesTitle = movie.title;

movie.cast = ['James Stewart', 'Donna Reed'];

movie.language = 'English';
movie['language'] = 'French';

movie.ratings = {
  personal: 70,
  critic: 94,
  audience: 95
};
// console.log(movie);

for (var key in movie) {
  var value = movie[key];
  // console.log(`The ${key} is ${value}`);
}

var properties = Object.keys(movie);

for (var i = 0; i < properties.length; i++) {
  var key = properties[i];
  var value = movie[key];
  console.log(`The ${key} is ${value}`);
}
```
</details>
<details>
<summary>
Scope
</summary>

```js
var name = 'Jill';
var secretsFunction = function () {
  var pinCode = [0, 0, 0, 0];
  // console.log('pinCode inside secretsFunction:', pinCode);
  // console.log('name inside secretsFunction:', name);
}
secretsFunction();
// console.log('pinCode outside secretsFunction:', pinCode);
// console.log('name outside secretsFunction:', name);

var filterNamesByFirstLetter = function (names, letter) {
  var filteredNames = [];
  for (let name of names) {
    if (name[0] === letter) {
      filteredNames.push(name);
    }
  }
  // console.log('name after loop:', name);
  return filteredNames
}

var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
var filteredStudents = filterNamesByFirstLetter(students, 'A');
// console.log('filteredStudents', filteredStudents);

const calculateEnergy = function (mass) {
  const speedOfLight = 299792458;
  // speedOfLight++
  return mass * speedOfLight ** 2;
}
// calculateEnergy = () => 0
const energyOfMe = calculateEnergy(75);
// console.log('energyOfMe (if I had a mass of 75kg)', energyOfMe);

const song = {
  title: 'Raspberry Beret',
  artist: 'Prince'
};
console.log('song before mutation', song);
song.title = 'When Doves Cry';
console.log('song after mutation', song);

const songs = [
  song,
  'Happy Birthday',
  'Hey Jude'
];
console.log('songs array before mutation', songs);
songs[1] = 'Call Me Maybe';
songs.pop();
console.log('songs array after mutation', songs);
```
</details>
<details>
<summary>
Who Dunnit - Scope Homework  
</summary>

#### Episode 1

```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);
```

Output: `The murderer is Miss Scarlet.`  
Reason: `declareMurderer` is called, which returns a string that refers to the `murderer` property on the `scenario` object.

#### Episode 2

```js
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
};

const delcareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

Output: `TypeError`  
Reason: The variable `murderer` is declared with the `const` keyword, so it cannot be resigned. When the `changeMurderer` function is called, it attempts to reassign the `murderer` variable, producing the type error `Assignment to constant variable`.

#### Episode 3

```js
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
```

Output: `First Verdict:  The murderer is Mrs. Peacock.` `Second Verdict:  The murderer is Professor Plum.`  
Reason: The `delcareMurderer` function is called, which creates a new local variable, `murderer` with the value of 'Mrs. Peacock' and returns a string that refers to local variable. This does not effect the initial `murderer` variable, so when the second verdict accesses the outer variable, it is still 'Professor Plum'.


#### Episode 4

```js
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
};

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
```

Output: `The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.`
`Suspect three is Mrs. Peacock.`
Reason: The initial suspect variables are declared. `suspectThree` has the value 'Mrs. Peacock'. When the `declareAllSuspects` function is called, it creates a new local variable `suspectThree` with the value 'Colonel Mustard' and does not effect the initial variable of the same name. The string returned by `declareAllSuspects` refers to the two initial variables `suspectOne` and `suspectTwo` and the local variable `suspectThree`. The second log refers to the unchanged initial variable, `suspectThree` with the value 'Mrs. Peacock'.

#### Episode 5

```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
};

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
};

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
```

Output: `The weapon is the Revolver.`
Reason: `changeWeapon` is called, changing the `scenario`'s `weapon` property to 'Revolver'. `delclareWeapon` is then called, returning a string that refers to the `scenario`'s `weapon` property.

Note: The `scenario` variable is declared using the `const` keyword so it cannot be reassigned. However an object is mutable, so its properties can be modified without it being a reassignment.

#### Episode 6

```js
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

Output: `The murderer is Mrs. White.`
Reason: `changeMurder` is called, which first reassigns `murderer` to have the value 'Mr. Green', then calls a second function, `plotTwist`, which reassigns `murderer` to have the value 'Mrs. White'. `declareMurderer` is then called returning a string that refers to `murderer`.

#### Episode 7

```js
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

Output: `The murderer is Mr. Green.`
Reason: `changeMurderer` is called, which first reassigns `murderer` to have the value 'Mr. Green'. It then calls `plotTwist` that creates a new local variable `murderer` with the value 'Colonel Mustard', which does not effect the initial `murderer` variable. `unexpectedOutcome` is then called which reassigns the local variable in the `plotTwist` function to be 'Miss Scarlet', but again, does not effect the initial `murderer` variable. When `declareMurderer` is called, it returns a string that refers to the initial `murderer` variable, which has only been reassigned once.

#### Episode 8

```js
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
```

Output: `The murderer is Colonel Mustard.`
Reason: `changeScenario` is called which update's `scenario`'s `murderer` property to 'Mrs. Peacock' and its `room` property to 'Dining Room'. Next `plotTwist` is called and checks if the scenario's room property is equals to 'Dining Room', which it is, so updates the `scenario`'s '`murderer` property to be 'Colonel Mustard'. Then `unexpectedOutcome` is called, which checks if the `scenario`'s `murderer` property is equal to 'Colonel Mustard', which it is, so it updates the `scenario`'s `weapon` property to be 'Candle Stick'. Then `declareWeapon` is called, which returns a string referring to the updated `scenario`'s `weapon` property.

#### Episode 9

```js
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
```

Output: `The murderer is Professor Plum.`
Reason: A variable `murderer` is declared with the value of 'Professor Plum'. The an `if` statement checks if `murderer` is equal to 'Professor Plum', which it is, so it creates a new local `murderer` variable with the value of 'Mrs. Peacock'. Because variables declared with the `let` and `const` keywords are block scoped, is does not effect the initial `murder` variable. When `declareMurderer` is called, it returns a string that refers to the initial `murder` variable.

### Extensions

Make up your own episode!

</details>
<details>
<summary>
Jurassic Park - TDD
</summary>
<br />
<details>
<summary>
Jurassic Park - README
</summary>

#### Learning Objectives

- Be able to use the fundamental JavaScript language features and data types
- Be able to create an application using multiple interacting objects

### Brief

John Hammond has tasked you with creating an app to help him manage his theme park. He needs to be able to track and manage information about the various dinosaurs in his park and the number of visitors that they will attract.

Use the start point provided, which contains the tested `Dinosaur` model and the uncompleted tests for the MVP `Park` model. (You will need to write your own tests for the extension tasks.)

**Hint:** Remember to remove the `x` from the pending tests (`xit()`) to run them.

#### MVP

A dinosaur must have:

- A species
- A diet (e.g. carnivore, herbivore or omnivore)
- An average number of visitors attracted per day

A park must have:

- A name
- A ticket price
- A collection of dinosaurs

A park must be able to:

- Add a dinosaur to its collection of dinosaurs
- Remove a dinosaur from its collection of dinosaurs
- Find all dinosaurs of a particular species
- Remove all dinosaurs of a particular species
- Find the dinosaur that attracts the most visitors

#### Extensions

A park must be able to:

- Calculate the total number of visitors per day
- Calculate the total number of visitors per year
- Calculate the total revenue from ticket sales for one year
- Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type  
Example: `{ 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }`

#### Considerations

Remember to use the appropriate `assert` method for the data types you are comparing in your tests.

</details>
<details>
<summary>
dinasaur.js
</summary>

```js
const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

module.exports = Dinosaur;

```

<details>
<summary>
dinasaur_spec.js
</summary>


```js
const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
  });

  it('should have a species', function () {
    const actual = dinosaur.species;
    assert.strictEqual(actual, 't-rex');
  });

  it('should have a diet', function () {
    const actual = dinosaur.diet;
    assert.strictEqual(actual, 'carnivore');
  });

  it('should have an average number of visitors it attracts per day', function () {
    const actual = dinosaur.guestsAttractedPerDay;
    assert.strictEqual(actual, 50);
  });

});
```
</details>
<br />
</details>
<details>
<summary>
park.js
</summary>

```js
const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.add = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.remove = function (dinosaur) {
  const index = this.dinosaurs.indexOf(dinosaur);
  if (index !== -1){
    this.dinosaurs.splice(index, 1);
  }
}

Park.prototype.findBySpecies = function (species) {
  const foundDinosaurs = [];

  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      foundDinosaurs.push(dinosaur);
    }
  }

  return foundDinosaurs;
}

Park.prototype.removeBySpecies = function (species) {
  const dinosaursToKeep = [];

  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species !== species) {
      newDinosaurs.push(dinosaur);
    }
  }

  this.dinosaurs = newDinosaurs;
}

Park.prototype.findMostAttractiveDinosaur = function () {
  let mostAttractiveDino = this.dinosaurs[0];

  for (const dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay) {
      mostAttractiveDino = dino;
    }
  }

  return mostAttractiveDino;
}

Park.prototype.calculateAverageVisitorsPerDay = function () {
  let averageDailyVisitors = 0;

  for (const dinosaur of this.dinosaurs) {
    averageDailyVisitors += dinosaur.guestsAttractedPerDay;
  }

  return averageDailyVisitors;
}

Park.prototype.calculateAverageVisitorsPerYear = function () {
  return this.calculateAverageVisitorsPerDay() * 365;
}

Park.prototype.calculateAverageYearlyRevenue = function () {
  return this.ticketPrice * this.calculateAverageVisitorsPerYear();
}

Park.prototype.numberOfDinosaursByDiet = function () {
  const numberOfDinosaursByDiet = {};

  for (const dinosaur of this.dinosaurs) {
    if (numberOfDinosaursByDiet[dinosaur.diet]) {
      numberOfDinosaursByDiet[dinosaur.diet] += 1;
    }
    else {
      numberOfDinosaursByDiet[dinosaur.diet] = 1;
    }
  }

  return numberOfDinosaursByDiet;
}

module.exports = Park;

```

<details>
<summary>
park_spec.js
</summary>

```js
const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let trex1;
  let trex2;
  let trex3;
  let velociraptor1;
  let velociraptor2;
  let diplodocus;
  let gallimimus;
  let park;

  beforeEach(function () {
    trex1 = new Dinosaur('t-rex', 'carnivore', 50);
    trex2 = new Dinosaur('t-rex', 'carnivore', 40);
    trex3 = new Dinosaur('t-rex', 'carnivore', 60);

    velociraptor1 = new Dinosaur('velociraptor', 'carnivore', 25);
    velociraptor2 = new Dinosaur('velociraptor', 'carnivore', 20);

    diplodocus = new Dinosaur('diplodocus', 'herbivore', 30);
    gallimimus = new Dinosaur('gallimimus', 'omnivore', 4);

    park = new Park('Jurassic Park', 20);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.add(trex1);
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.add(trex1);
    park.add(velociraptor1);
    park.remove(velociraptor1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.add(trex1);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    const actual = park.findBySpecies('velociraptor');
    const expected = [velociraptor1, velociraptor2];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.add(trex1);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    park.removeBySpecies('velociraptor');
    const actual = park.dinosaurs;
    const expected = [trex1, diplodocus, gallimimus];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(diplodocus);
    park.add(gallimimus);
    const actual = park.findMostAttractiveDinosaur();
    assert.strictEqual(actual, trex3);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    const actual = park.calculateAverageVisitorsPerDay()
    assert.strictEqual(actual, 229);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    const actual = park.calculateAverageVisitorsPerYear();
    assert.strictEqual(actual, 83585);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    const actual = park.calculateAverageYearlyRevenue();
    assert.strictEqual(actual, 1671700);
  });

  it('should be able to calculate number of dinosaurs for each diet type', function () {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    const actual = park.numberOfDinosaursByDiet();
    const expected = { carnivore: 5, herbivore: 1, omnivore: 1 };
    assert.deepStrictEqual(actual, expected);
  });

});

```
</details>
</details>
<br />
</details>

<details>
<summary>
Top Trumps - TDD Lab
</summary>
<br />
<details>
<summary>
cards.js
</summary>

```js
const Card = function (options) {
  this.name = options.name;
  this.intelligence = options.intelligence;
  this.strength = options.strength;
  this.agility = options.agility;
};

module.exports = Card;
```

<details>
<summary>
cards_spec.js
</summary>

```js
const assert = require('assert');
const Card = require('../card.js');

describe('Card', function () {

  let card;

  beforeEach(function () {
    card = new Card({
      name: 'Superman',
      intelligence: 6,
      strength: 9,
      agility: 7
    });
  });

  it('should have a name', function () {
    const actual = card.name;
    assert.strictEqual(actual, 'Superman');
  });

  it('should have intelligence', function () {
    const actual = card.intelligence;
    assert.strictEqual(actual, 6);
  });

  it('should have strength', function () {
    const actual = card.strength;
    assert.strictEqual(actual, 9);
  });

  it('should have agility', function () {
    const actual = card.agility;
    assert.strictEqual(actual, 7);
  });

});

```

</details>
<br />
</details>
<details>
<summary>
game.js
</summary>

```js
const Game = function (cards, players) {
  this.deck = cards;
  this.players = players;
  this.winner = null;
};

Game.prototype.dealCard = function (card) {
  this.players[0].addCard(card);
};

Game.prototype.switchPlayers = function () {
  const player = this.players.shift();
  this.players.push(player);
};

Game.prototype.dealDeck = function () {
  for (const card of this.deck) {
    this.players[0].addCard(card);
    this.switchPlayers();
  }
};

Game.prototype.playCards = function () {
  for (const player of this.players) {
    player.playCard();
  }
};

Game.prototype.calculateWinnerOfTurn = function () {
  const card1 = this.players[0].currentCard;
  const card2 = this.players[1].currentCard;
  const category = this.players[0].currentCategory;
  if (card2[category] > card1[category]) this.switchPlayers();
};

Game.prototype.giveCardsToWinner = function () {
  const card1 = this.players[0].currentCard;
  const card2 = this.players[1].currentCard;
  this.players[0].receiveCards([card1, card2]);
};

Game.prototype.checkForWinner = function () {
  if (this.players[0].handEmpty()) this.winner = this.players[1];
  if (this.players[1].handEmpty()) this.winner = this.players[0];
};

Game.prototype.playTurn = function () {
  this.calculateWinnerOfTurn();
  this.giveCardsToWinner();
  this.checkForWinner();
};

module.exports = Game;

```

<details>
<summary>
game_spec.js
</summary>

```js
const assert = require('assert');
const Card = require('../card.js');
const Player = require('../player.js');
const Game = require('../game.js');

describe('Game', function () {

let card1;
let card2;
let card3;
let card4;
let card5;
let card6;
let tracy;
let tim;
let players;
let game;

beforeEach(function () {
  card1 = new Card({
    name: 'Superman',
    intelligence: 6,
    strength: 9,
    agility: 7
  });

  card2 = new Card({
    name: 'Scarlet Witch',
    intelligence: 7,
    strength: 10,
    agility: 5
  });

  card3 = new Card({
    name: 'Black Widow',
    intelligence: 8,
    strength: 6,
    agility: 9
  });

  card4 = new Card({
    name: 'The Flash',
    intelligence: 7,
    strength: 4,
    agility: 10
  });

  card5 = new Card({
    name: 'Wonder Woman',
    intelligence: 8,
    strength: 7,
    agility: 5
  });

  card6 = new Card({
    name: 'Batman',
    intelligence: 10,
    strength: 5,
    agility: 6
  });

  cards = [card1, card2, card3, card4, card5, card6];
  tracy = new Player('Tracy Champ');
  tim = new Player('Tim Win');
  players = [tracy, tim]
  game = new Game(cards, players);
});

it('should have a deck', function () {
  const actual = game.deck;
  assert.deepStrictEqual(actual, cards);
});

it('should have two players', function () {
  const actual = game.players;
  assert.deepStrictEqual(actual, players);
});

it('should be able to deal one card to a player', function () {
  game.dealCard(card1);
  const actual = tracy.hand[0];
  assert.deepStrictEqual(actual, card1);
});

it('should be able to switch players', function () {
  game.switchPlayers();
  const actual = game.players;
  assert.deepStrictEqual(actual, [tim, tracy]);
});

it('should be able to deal deck to players', function () {
  game.dealDeck();
  assert.deepStrictEqual(tracy.hand, [card1, card3, card5]);
  assert.deepStrictEqual(tim.hand, [card2, card4, card6]);
});

it('should be able to have all players play cards', function () {
  game.dealDeck();
  game.playCards();
  assert.strictEqual(tracy.currentCard, card5);
  assert.strictEqual(tim.currentCard, card6);
});

it('should be able to find the winner of the turn', function () {
  game.dealDeck();
  game.playCards();
  tracy.selectCategory('intelligence');
  game.calculateWinnerOfTurn();
  const actual = game.players[0];
  assert.deepStrictEqual(actual, tim);
});

it('should be able to give cards to winner', function () {
  game.dealDeck();
  game.playCards();
  tracy.selectCategory('intelligence');
  game.calculateWinnerOfTurn();
  game.giveCardsToWinner();
  const actual = tim.hand;
  assert.deepStrictEqual(actual, [card2, card4, card6, card5]);
});

it('should be able to check for a winner of the game', function () {
  tracy.addCard(card1);
  tim.addCard(card2);
  game.playCards();
  tracy.selectCategory('intelligence');
  game.calculateWinnerOfTurn();
  game.giveCardsToWinner(tracy);
  game.checkForWinner();
  const actual = game.winner;
  assert.deepStrictEqual(actual, tim);
});

it('should be able to play turn', function () {
  game.dealDeck();
  game.playCards();
  tracy.selectCategory('intelligence');
  game.playTurn();
  assert.deepStrictEqual(tracy.hand, [card1, card3]);
  assert.deepStrictEqual(tim.hand, [card2, card4, card6, card5]);
  assert.deepStrictEqual(game.players, [tim, tracy]);
});

it('should be able to find winner of game at the end of final turn', function() {
  tracy.addCard(card1);
  tim.addCard(card2);
  game.playCards();
  tracy.selectCategory('strength');
  game.playTurn();
  const actual = game.winner;
  assert.deepStrictEqual(actual, tim);
});

});

```

</details>
<br />
</details>
<details>
<summary>
player.js
</summary>

```js
const Player = function (name) {
  this.name = name;
  this.hand = [];
  this.currentCard = null;
  this.currentCategory = null;
};

Player.prototype.countCards = function () {
  return this.hand.length;
};

Player.prototype.addCard = function (card) {
  this.hand.push(card);
};

Player.prototype.handEmpty = function () {
  return this.hand.length === 0;
};

Player.prototype.playCard = function () {
  this.currentCard = this.hand.pop();
};

Player.prototype.selectCategory = function (category) {
  this.currentCategory = category;
};

Player.prototype.receiveCards = function (cards) {
  this.hand = this.hand.concat(cards);
};

module.exports = Player;

```

<details>
<summary>
player_spec.js
</summary>

```js
const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', function () {

  let player;
  let card1;

  beforeEach(function () {
    player = new Player('Tracy Champ');

    card1 = new Card({
      name: 'Wonder Woman',
      intelligence: 8,
      strength: 7,
      agility: 5
    });
  });

  it('should have a name', function () {
    const actual = player.name;
    assert.strictEqual('Tracy Champ', actual);
  });

  it('should have a hand that starts empty', function () {
    const actual = player.hand;
    assert.deepStrictEqual([], actual);
  });

  it('should be able to count cards in hand', function () {
    const actual = player.countCards();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a card', function () {
    player.addCard(card1);
    const actual = player.hand[0];
    assert.deepStrictEqual(actual, card1);
  });

  it('should be able to check if hand is empty', function () {
    const actual = player.handEmpty();
    assert.strictEqual(actual, true);
  });

  it('should be able to play a card', function () {
    player.addCard(card1);
    player.playCard();
    const actual = player.currentCard;
    assert.deepStrictEqual(actual, card1);
  });

  it('should be able to select a category', function () {
    player.selectCategory('intelligence');
    const actual = player.currentCategory;
    assert.strictEqual(actual, 'intelligence');
  });

  it('should have hand decreased by one after playing a card', function () {
    player.addCard(card1);
    player.playCard();
    const actual = player.countCards();
    assert.strictEqual(actual, 0);
  });

  it('should be able to receive cards', function () {
    const card2 = new Card({
      name: 'Batman',
      intelligence: 10,
      strength: 5,
      agility: 6
    });
    player.receiveCards([card1, card2]);
    const actual = player.hand;
    assert.deepStrictEqual(actual, [card1, card2]);
  });

});

```

</details>
<br />
</details>
<br />
</details>


<details>
<summary>
Traveller - Hw Callbacks Enumeration
</summary>
<br />
<details>
<summary>
journey.js
</summary>

```js
const Journey = function(startLocation, endLocation, transport, distance) {
  this.startLocation = startLocation;
  this.endLocation = endLocation;
  this.transport = transport;
  this.distance = distance;
};

module.exports = Journey;

```

<details>
<summary>
journey_spec.js
</summary>

```js
const assert = require('assert');
const Journey = require('../models/journey.js');

describe('Journey', function() {

  let journey1;

  beforeEach(function() {
    journey1 = new Journey('linlithgow', 'stirling', 'train', 30);
  });

  it('should have a start location', function() {
    const actual = journey1.startLocation;
    assert.strictEqual(actual, 'linlithgow');
  });

  it('should have a end location', function() {
    const actual = journey1.endLocation;
    assert.strictEqual(actual, 'stirling');
  });

  it('should have a mode of transport', function() {
    const actual = journey1.transport;
    assert.strictEqual(actual, 'train');
  });

  it('should have a distance', function() {
    const actual = journey1.distance;
    assert.strictEqual(actual, 30);
  });

});

```

</details>
<br />
</details>
<details>
<summary>
traveller.js
</summary>

```js
const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.getModesOfTransport().filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  });
};


module.exports = Traveller;

```

<details>
<summary>
traveller_spec.js
</summary>

```js
const assert = require('assert');
const Journey = require('../models/journey.js');
const Traveller = require('../models/traveller.js');

describe('Traveller', function() {

  let journey1
  let journey2
  let journey3
  let journey4
  let journey5
  let journeys;
  let traveller;

  beforeEach(function() {
    journey1 = new Journey('linlithgow', 'stirling', 'train', 30);
    journey2 = new Journey('paris', 'frankfurt', 'train', 400);
    journey3 = new Journey('sydney', 'new york', 'aeroplane', 10000);
    journey4 = new Journey('london', 'rome', 'car', 1200);
    journey5 = new Journey('lancaster', 'isle of man', 'ferry', 80);
    journeys = [journey1, journey2, journey3, journey4, journey5];
    traveller = new Traveller(journeys);
  });

  it('should have a collection of journeys', function() {
    const actual = traveller.journeys;
    assert.deepStrictEqual(actual, journeys)
  });

  it('should be able to get the journeys start locations', function() {
    const actual = [
      journey1.startLocation,
      journey2.startLocation,
      journey3.startLocation,
      journey4.startLocation,
      journey5.startLocation
    ];
    assert.deepStrictEqual(actual, traveller.getJourneyStartLocations());
  });

  it('should be able to get the journeys end locations', function() {
    const actual = [
      journey1.endLocation,
      journey2.endLocation,
      journey3.endLocation,
      journey4.endLocation,
      journey5.endLocation
    ];
    assert.deepStrictEqual(actual, traveller.getJourneyEndLocations());
  });

  it('should be able to get a list of the modes of transport', function() {
    const actual = [ 'train', 'train', 'aeroplane', 'car', 'ferry' ];
    assert.deepStrictEqual(actual, traveller.getModesOfTransport());
  });

  it('should be able to get journeys by transport', function() {
    const actual = [
      journey1,
      journey2
    ];
    assert.deepStrictEqual(actual, traveller.getJourneysByTransport('train'));
  });

  it('should be able to get journeys over a certain distance', function() {
    const actual = [
      journey3,
      journey4
    ];
    assert.deepStrictEqual(actual, traveller.getJourneysByMinDistance(1000))
  });

  it('should be able to calculate total distance travelled', function() {
    const actual = 11710;
    assert.deepStrictEqual(actual, traveller.calculateTotalDistanceTravelled())
  });

  it('should be able to get a unique list of the modes of transport', function() {
    const actual = [ 'train', 'aeroplane', 'car', 'ferry' ];
    assert.deepStrictEqual(actual, traveller.getUniqueModesOfTransport());
  });

});

```

</details>
<br />
</details>
<br />
</details>


<details>
<summary>
Films - Lab Callbacks Enumeration
</summary>
<br />
<details>
<summary>
film.js
</summary>

```js
const Film = function (title, genre, year, length) {
  this.title = title;
  this.genre = genre;
  this.year = year;
  this.length = length;
};

module.exports = Film;

```

<details>
<summary>
film_spec.js
</summary>

```js
const assert = require('assert');
const Film = require('../models/film.js');

describe('Film', function () {

  let moonlight;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
  });

  it('should have a title', function () {
    const actual = moonlight.title;
    assert.strictEqual(actual, 'Moonlight');
  });

  it('should have a genre', function () {
    const actual = moonlight.genre;
    assert.strictEqual(actual, 'drama');
  });

  it('should have a year', function () {
    const actual = moonlight.year;
    assert.strictEqual(actual, 2016);
  });

  it('should have a length', function () {
    const actual = moonlight.length;
    assert.strictEqual(actual, 111);
  });

});

```

</details>
<br />
</details>
<details>
<summary>
cinema.js
</summary>

```js
const assert = require('assert');
const Film = require('../models/film.js');

describe('Film', function () {

  let moonlight;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
  });

  it('should have a title', function () {
    const actual = moonlight.title;
    assert.strictEqual(actual, 'Moonlight');
  });

  it('should have a genre', function () {
    const actual = moonlight.genre;
    assert.strictEqual(actual, 'drama');
  });

  it('should have a year', function () {
    const actual = moonlight.year;
    assert.strictEqual(actual, 2016);
  });

  it('should have a length', function () {
    const actual = moonlight.length;
    assert.strictEqual(actual, 111);
  });

});

```

<details>
<summary>
cinema_spec.js
</summary>

```js
const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const actual = cinema.filmTitles();
    const expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find a film by title', function () {
    const actual = cinema.filmByTitle('Dunkirk');
    assert.deepStrictEqual(actual, dunkirk);
  });

  it('should be able to filter films by genre', function () {
    const actual = cinema.filmsByGenre('drama');
    // Extension:
    // const actual = cinema.filmsByProperty('genre', `drama`);
    const expected = [moonlight, trainspotting];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to check whether there are some films from a particular year', function () {
    const actual = cinema.hasFilmsFromYear(2018);
    assert.strictEqual(actual, true);
  });

  it('should be able to check whether there are no films from a particular year', function () {
    const actual = cinema.hasFilmsFromYear(2000);
    assert.strictEqual(actual, false);
  });

  it('should be able to check whether all films are over a particular length', function () {
    const actual = cinema.areAllFilmsOfMinLength(60);
    assert.strictEqual(actual, true);
  });

  it('should be able to calculate total running time of all films', function () {
    const actual = cinema.totalRunningTime();
    assert.strictEqual(actual, 622);
  });

  //  Extension:

  // it('should be able to filter films by year', function () {
  //   const actual = cinema.filmsByProperty('year', 2017);
  //   const expected = [bladeRunner, dunkirk, trainspotting];
  //   assert.deepStrictEqual(actual, expected);
  // });

});

module.exports = Cinema;

```

</details>
<br />
</details>
<br />
</details>




<details>
<summary>
(Ana/Iso/Pan)gram - Lab Enumeration
</summary>
<br />
<details>
<summary>
anagram_finder.js
</summary>

```js
const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((otherWord) => {
    return this.isAnagram(otherWord) && this.isDifferentWord(otherWord);
  });
}

AnagramFinder.prototype.isAnagram = function (otherWord) {
  return this.prepare(this.word) === this.prepare(otherWord);
}

AnagramFinder.prototype.isDifferentWord = function (otherWord) {
  return this.word.toLowerCase() !== otherWord.toLowerCase();
}

AnagramFinder.prototype.prepare = function (word) {
  return word.toLowerCase().split('').sort().join('');
}

module.exports = AnagramFinder;

```

<details>
<summary>
anagram_finder_spec.js
</summary>

```js
const assert = require('assert');
const AnagramFinder = require('./anagram_finder.js');

describe('AnagramFinder', function () {
  it('should be able to detect an anagram', function () {
    const anagramFinder = new AnagramFinder('act');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['cat', 'dog']), ['cat']);
  });

  it('should be able to detect a non-anagram', function () {
    const anagramFinder = new AnagramFinder('potato');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['tomato']), []);
  })

  it('should not detect words with too few letters as an anagram', function () {
    const anagramFinder = new AnagramFinder('good');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['dog']), []);
  });

  it('should not detect words with too many letters as an anagram', function () {
    const anagramFinder = new AnagramFinder('dog');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['good']), []);
  });

  it('should detect an anagram regardless of case', function () {
    const anagramFinder = new AnagramFinder('DeduCTionS');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['DiscOUnteD']), ['DiscOUnteD']);
  });

  it('should not detect a word as it\'s own anagram', function () {
    const anagramFinder = new AnagramFinder('javascript');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['javascript']), []);
  });

  it('should not detect an empty string as an anagram', function () {
    const anagramFinder = new AnagramFinder('word');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['']), []);
  });
});

```

</details>
<br />
</details>
<details>
<summary>
isogram_finder.js
</summary>

```js
const IsogramFinder = function (word) {
  this.word = word.toLowerCase();
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.split('').every(this.isUnique.bind(this));
}

IsogramFinder.prototype.isUnique = function (letter) {
  return this.word.indexOf(letter) === this.word.lastIndexOf(letter);
}

module.exports = IsogramFinder;

```

<details>
<summary>
isogram_finder_spec.js
</summary>

```js
const assert = require('assert');
const IsogramFinder = require('./isogram_finder.js');

describe('IsogramFinder', function () {
  it('should be able to detect an isogram', function () {
    const isogramFinder = new IsogramFinder('subdermatoglyphic');
    assert.strictEqual(isogramFinder.isIsogram(), true);
  });

  it('should be able to detect a non-isogram', function () {
    const isogramFinder = new IsogramFinder('repeated');
    assert.strictEqual(isogramFinder.isIsogram(), false);
  });

  it('should be able to detect an isogram case insensitively', function () {
    const isogramFinder = new IsogramFinder('Uncopyrightable');
    assert.strictEqual(isogramFinder.isIsogram(), true);
  });

  it('should be able to detect a non-isogram case insensitively', function () {
    const isogramFinder = new IsogramFinder('NotAnIsogram');
    assert.strictEqual(isogramFinder.isIsogram(), false);
  });
});

```

</details>
<br />
</details>
<details>
<summary>
panagram_finder.js
</summary>

```js
const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase();
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(letter => this.phrase.includes(letter));
}

module.exports = PangramFinder;

```

<details>
<summary>
panagram_finder_spec.js
</summary>

```js
const assert = require('assert');
const PangramFinder = require('./pangram_finder.js');

describe('PangramFinder', function () {
  it('should be able to detect a pangram', function () {
    const pangramFinder = new PangramFinder('the quick brown fox jumps over the lazy dog');
    assert.strictEqual(pangramFinder.isPangram(), true);
  });

  it('should be able to detect a non-pangram', function () {
    const pangramFinder = new PangramFinder('this is not a pangram');
    assert.strictEqual(pangramFinder.isPangram(), false);
  });

  it('should be able to detect a pangram with mixed case', function () {
    const pangramFinder = new PangramFinder('The FIVE boxinG WiZaRdS JUMP quickly');
    assert.strictEqual(pangramFinder.isPangram(), true);
  });

  it('should be able to detect a non-pangram with mixed case', function () {
    const pangramFinder = new PangramFinder('');
    assert.strictEqual(pangramFinder.isPangram(), false);
  });

  it('should be able to detect a pangram with special characters', function () {
    const pangramFinder = new PangramFinder('how_vexingly_quick_daft_zebras_jump!');
    assert.strictEqual(pangramFinder.isPangram(), true);
  });

  it('should be able to detect a non-pangram with special characters', function () {
    const pangramFinder = new PangramFinder('is_this_a_pangram?!');
    assert.strictEqual(pangramFinder.isPangram(), false);
  });
});

```

</details>
<br />
</details>
<details>
<summary>
upper_caser.js
</summary>

```js
const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  return this.words.map(word => word.toUpperCase());
}

module.exports = UpperCaser;

```

<details>
<summary>
upper_caser_spec.js
</summary>

```js
const assert = require('assert');
const UpperCaser = require('./upper_caser.js');

describe('UpperCaser', function () {
  it('should be able to convert a single word to uppercase', function () {
    const upperCaser = new UpperCaser(['shouting']);
    assert.deepStrictEqual(upperCaser.toUpperCase(), ['SHOUTING']);
  });

  it('should be able to convert multiple words to uppercase', function () {
    const upperCaser = new UpperCaser(['i', 'am', 'shouting']);
    assert.deepStrictEqual(upperCaser.toUpperCase(), ['I', 'AM', 'SHOUTING']);
  });
});

```

</details>
<br />
</details>
<br />
</details>
