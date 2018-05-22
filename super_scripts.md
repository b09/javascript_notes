
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
Jurassic Park - Brief
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

<br />
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
Top Trumps - Brief
</summary>

#### Learning Objectives

- Be able to write unit tests using Assert in combination with Mocha
- Be able to run test files with Mocha using an npm script

### Introduction

In this lab you will be using the testing framework, Mocha, to design, build and test the game logic for a two-player game of Superheroes Top Trumps. The brief is to build a game of Top Trumps with the following game play:

- All the cards are dealt to the players face down.
- For each turn:
  - Each player looks at the top card.
  - The first player chooses the category that they want to play with (e.g. Intelligence or Strength).
  - The players compare their cards' values for the selected category.
  - The player with the highest value gets the two cards.
- Once one player has all the cards, they have won the game.

### Task

#### MVP

Your application should have the following classes:

- Game
- Card
- Player

The game should have two players and be able to deal the cards to the players. A player should be able to play the top card in their hand and select a category that they want to play with. The game should be able to calculate the winner of the turn. If result of the turn is a draw, the player who made the category selection wins.

**Note: Do not implement functionality to shuffle the cards.**

Use the following details for your deck of cards:

```
Name: 'Superman'
Intelligence: 6
Strength: 9
Agility: 7

Name: 'Scarlet Witch'
Intelligence: 7
Strength: 10
Agility: 5

Name: 'Black Widow'
Intelligence: 8
Strength: 6
Agility: 9

Name: 'The Flash'
Intelligence: 7
Strength: 4
Agility: 10

Name: 'Wonder Woman'
Intelligence: 8
Strength: 7
Agility: 5

Name: 'Batman'
Intelligence: 10
Strength: 5
Agility: 6
```

#### Extensions

1. At the end of a turn, the winning player should receive the two cards from the turn.
2. Whichever player wins the turn, should choose the category on the next turn.
3. When one of the players has all the cards, they should win the game.

### Considerations

What are the responsibilities of each model?
Which type of assert do you need for each test?

### Plan

To setup your project you will need a models folder with a specs folder inside. You will also need to:

- Initialise npm with `npm init`
- Install mocha as a dev dependency with `npm install -D mocha`
- Update the test script in the package.json to use mocha with `specs models/specs`

<br />
</details>
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
Traveller - Brief
</summary>

#### Learning Objectives
- Be able to pass functions to higher-order functions
- Be able to use built-in Array enumeration methods

### Brief

You have been given a project with two models, Traveller and Journey, and their corresponding test files.

A Journey has:

- a start location
- an end location
- a mode of transport
- a distance in miles

A Traveller has:

- an array of Journeys

You should write the code to make the Traveller tests pass, without modifying the spec files. You should use JavaScript's built-in enumerator methods, only using `forEach` if you can't find a way to use one of the other more appropriate methods.

#### MVP

Traveller:

- should have a collection of journeys
- should be able to get the journeys start locations
- should be able to get the journeys end locations
- should be able to get a list of the modes of transport
- should be able to get journeys by transport
- should be able to get journeys over a certain distance

#### Extensions

Traveller:

- should be able to calculate total distance travelled
- should be able to get a unique list of modes of transport

Note: Remember to remove the `x` from `xit()` on the pending tests to run them.

<br />
</details>
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
Films - Brief
</summary>

#### Learning Objectives

- Be able to pass functions to higher-order functions
- Be able to use built-in Array enumeration methods

### Brief

You have been given a project with two models, `Cinema` and `Film`, and their corresponding test files.

A Film has:

- a title
- a genre
- a year
- a length

A Cinema has:

- an array of `Film`s

You should write the code to make the Cinema tests pass. You should use JavaScript's built-in enumerator methods, only using `forEach` if you can't find a way to use one of the other more appropriate methods.

#### MVP

Cinema:

- should have a collection of films
- should be able to get a list of film titles
- should be able to find a film by title
- should be able to filter films by genre
- should be able to check whether there are some films from a particular year
- should be able to check whether all films are over a particular length
- should be able to calculate total running time of all films

#### Extensions

Add a another test, `'Cinema should be able to filter films by year'`.

We already have a method that filters films by genre, the functionality of which is very similar. We don't want two separate methods as that wouldn't be DRY. Your task is get the final test to pass by to writing a new method called `filmsByProperty`, which takes two arguments:

1. the name of the property
2. the value being search for

Once the final test is passing, modify the test `'Cinema should be able to filter films by genre'` to use the new `filmsByProperty` method.

#### Consideration

If you use reduce, remember that you will need to pass in a default accumulator as the second argument.

<br />
</details>
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
(Ana/Iso/Pan)gram - Brief
</summary>

#### Learning Objectives

- Be able to pass functions to higher-order functions
- Be able to use built-in Array enumeration methods

### Brief

You have been given four projects, each containing a coding problem. You should write the code to make the tests pass, without modifying the spec files. You should use JavaScript's built-in enumerator methods where appropriate.

You should attempt to make your code as clean as possible. You don't have to do all the work in the function that's being called in the test. Don't be afraid to attach little helper functions to the provided prototype.

### UPPERCASER

`map` an array of strings to a new array containing uppercase versions of each string.

### Pangram Finder

A pangram is a sentence or phrase which contains every letter of the alphabet. "The quick brown fox jumps over the lazy dog." is probably the most notable pangram in English.

Given a sentence or phrase you should be able to determine whether or not `every` letter of the alphabet is included in it.

### Isogram Finder

An isogram is a word, phrase or sentence that does not contain any repeated letters. "Orange" is an isogram but "apple" is not.

Given a word, phrase or sentence you should be able to determine whether or not it is an isogram. That is, you should be able to determine whether `some` letters are repeated.

### Extension: Anagram Finder

An anagram is a word formed by rearranging the letters of another word. Listen is an anagram of silent, for example.

Given a word and an array of other words you should be able to `filter` the array, leaving only the anagrams of the word in question in the array.

<br />
</details>
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



<details>
<summary>
Record Store - Wkend Homework
</summary>
<br />
<details>
<summary>
Record Store - Brief
</summary>

#### Learning Objectives

- Be able to create and unit test models
- Be able to pass callback to the built in Array enumeration methods
- Be able to select the appropriate Array enumeration method

### Brief

Your task is to model the interaction between a record store and a record collector to enable them to buy and sell records from one another. You should include a transaction class that is responsible for handling the exchange of records. The store and collector should also have functionality that allows them to search and organise their records.

You have been given the tested Record model. You need to TDD the remaining models using Mocha.

#### MVP

A record collector:

- should start with no funds
- should be able to add funds
- should be able to remove funds
- should start with an empty collection of records
- should be able to add a record to it's collection
- should be able to find a record by title
- should be able to remove a record from it's collection
- should be able to buy a record if it has enough funds
- should be able to sell a record if it has the record

A record store:

- should have a name
- should start with no funds
- should be able to add funds
- should start with an empty collection of records
- should be able to add a record to its stock
- should be able to remove a record from its stock
- should be able to sell a record if it has the record

A transaction:

- should have a buyer
- should have a seller
- should be able handle an exchange of a record when the seller has the record and the buyer has enough funds

#### Extensions

A record collector:

- should be able to sort its collection by artist name

A record store:

- should be able to find all records which match a given genre
- should be able to find all records which match a given title
- should be able to find all records which match a given artist
- should be able to find all records which match on multiple attributes

Note: For this extension your method should take in a query object and find any record that matches on all of the properties of the query object. For example, if the method is passed the following object:

```js
{ genre: 'Rock' }
```

it would return an array of all the records with the genre 'rock'. And if it is passed the following object:

```js
{ title: 'Thriller', artist: 'Michael Jackson' }
```

it would return an array containing one record: Michael Jackson's, 'Thriller'.

### Considerations

Use the MDN docs to help you use the Array enumeration methods. The key pieces of information you might look for are:

- the return value of the enumeration method. This will help you determine if its the appropriate enumeration method for the task.
- what arguments the enumeration method will pass your callback (and therefore what parameters you need to give your callback).
- what the enumeration method requires your callback to return.

Create helper methods to keep your methods small and readable, and remember to test each of your methods. To do this you will need to write additional tests to the ones listed in the brief.

For more robust testing, test negative test cases, as well as the positive.


<br />
</details>
<details>
<summary>
record.js
</summary>

```js
const Record = function (options) {
  this.title = options.title;
  this.artist = options.artist;
  this.genre = options.genre;
  this.price = options.price;
};

module.exports = Record;

```

<details>
<summary>
record_spec.js
</summary>

```js
const Record = require('../record.js');
const assert = require('assert');

describe('Record', function () {
  let record;

  beforeEach(function () {
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
  });

  it('should have a title', function () {
    assert.strictEqual(record.title, 'Their Greatest Hits 1971 - 1975');
  });

  it('should have an artist', function () {
    assert.strictEqual(record.artist, 'Eagles');
  });

  it('should have a genre', function () {
    assert.strictEqual(record.genre, 'rock');
  });

  it('should have a price', function () {
    assert.strictEqual(record.price, 1000);
  });
});

```

</details>
<br />
</details>
<details>
<summary>
record_store.js
</summary>

```js
const RecordStore = function (name) {
  this.name = name;
  this.funds = 0;
  this.stock = [];
};

RecordStore.prototype.findRecord = function (query) {
  const foundRecords = this.stock.filter((record) => {
    return Object.keys(query).every((attribute) => {
      return record[attribute] === query[attribute];
    });
  });
  return foundRecords;
};

RecordStore.prototype.addFunds = function (amount) {
  this.funds += amount;
};

RecordStore.prototype.addRecordToStock = function (record) {
  this.stock.push(record);
};

RecordStore.prototype.sell = function (record) {
  if (!this.hasRecord(record)) return;
  this.addFunds(record.price);
  this.removeRecordFromStock(record);
};

RecordStore.prototype.hasRecord = function (record) {
  return this.stock.includes(record);
};

RecordStore.prototype.removeRecordFromStock = function (record) {
  if (!this.hasRecord(record)) return;
  const index = this.stock.indexOf(record);
  this.stock.splice(index, 1);
};

module.exports = RecordStore;


```

<details>
<summary>
record_store_spec.js
</summary>

```js
const assert = require('assert');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');

describe('RecordStore', function () {
  let recordStore;

  beforeEach(function () {
    recordStore = new RecordStore('HMV');
  });

  it('should have a name', function () {
    assert.strictEqual(recordStore.name, 'HMV');
  });

  it('should start with no funds', function () {
    assert.strictEqual(recordStore.funds, 0);
  });

  it('should be able to add funds', function () {
    recordStore.addFunds(50000);
    assert.strictEqual(recordStore.funds, 50000);
  });

  it('should start with an empty collection of records', function () {
    assert.deepStrictEqual(recordStore.stock, []);
  });

  it('should be able to add a record to its stock', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(record);
    assert.deepStrictEqual(recordStore.stock, [record]);
  });

  it('should be able to report if it has a record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(record);
    assert.strictEqual(recordStore.hasRecord(record), true);
  });

  it('should be able to report if it does not have a record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    assert.strictEqual(recordStore.hasRecord(record), false);
  });

  it('should be able to remove a record from its stock', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(record);
    recordStore.removeRecordFromStock(record);
    assert.deepStrictEqual(recordStore.stock, []);
  });

  it('should be able to sell a record if it has the record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(record);
    recordStore.sell(record);
    assert.strictEqual(recordStore.funds, 1000);
    assert.deepStrictEqual(recordStore.stock, []);
  });

  it('should not be able to sell a record if it does not have the record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.sell(record);
    assert.strictEqual(recordStore.funds, 0);
  });

  it('should be able to find all records which match a given genre', function () {
    const eagles = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    const michaelJackson = new Record({
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'pop',
      price: 1000
    });
    const ledZeppelin = new Record({
      title: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(eagles);
    recordStore.addRecordToStock(michaelJackson);
    recordStore.addRecordToStock(ledZeppelin);
    const actual = recordStore.findRecord({ genre: 'rock' });
    assert.deepStrictEqual(actual, [eagles, ledZeppelin]);
  });

  it('should be able to find all records which match a given title', function () {
    const eagles = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    const michaelJackson = new Record({
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'pop',
      price: 1000
    });
    const ledZeppelin = new Record({
      title: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(eagles);
    recordStore.addRecordToStock(michaelJackson);
    recordStore.addRecordToStock(ledZeppelin);
    const actual = recordStore.findRecord({ title: 'Thriller' });
    assert.deepStrictEqual(actual, [michaelJackson]);
  });

  it('should be able to find all records which match a given artist', function () {
    const eagles = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    const michaelJackson = new Record({
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'pop',
      price: 1000
    });
    const ledZeppelin = new Record({
      title: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(eagles);
    recordStore.addRecordToStock(michaelJackson);
    recordStore.addRecordToStock(ledZeppelin);
    const actual = recordStore.findRecord({ artist: 'Led Zeppelin' });
    assert.deepStrictEqual(actual, [ledZeppelin]);
  });

  it('should be able to find all records which match on multiple attributes', function () {
    const eagles = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    const michaelJackson = new Record({
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'pop',
      price: 1000
    });
    const ledZeppelin = new Record({
      title: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(eagles);
    recordStore.addRecordToStock(michaelJackson);
    recordStore.addRecordToStock(ledZeppelin);
    const actual = recordStore.findRecord({
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'pop'
    });
    assert.deepStrictEqual(actual, [michaelJackson]);
  });
});


```

</details>
<br />
</details>
<details>
<summary>
record_collector.js
</summary>

```js
const RecordCollector = function () {
  this.funds = 0;
  this.collection = [];
};

RecordCollector.prototype.buy = function (record) {
  if (!this.hasFunds(record.price)) return;
  this.subtractFunds(record.price);
  this.addRecordToCollection(record);
};

RecordCollector.prototype.sell = function (record) {
  if (!this.hasRecord(record)) return;
  this.addFunds(record.price);
  this.removeRecordFromCollection(record);
};

RecordCollector.prototype.hasFunds = function (amount) {
  return this.funds >= amount;
};

RecordCollector.prototype.subtractFunds = function (amount) {
  if (!this.hasFunds(amount)) return;
  this.funds -= amount;
};

RecordCollector.prototype.addFunds = function (amount) {
  this.funds += amount;
};

RecordCollector.prototype.hasRecord = function (record) {
  return this.collection.includes(record);
};

RecordCollector.prototype.addRecordToCollection = function (record) {
  this.collection.push(record);
};

RecordCollector.prototype.removeRecordFromCollection = function (record) {
  if (!this.hasRecord(record)) return;
  const index = this.collection.indexOf(record);
  this.collection.splice(index, 1);
};

RecordCollector.prototype.sortCollection = function () {
  const sortedCollection = this.collection.sort((next, prev) => {
    return next.artist.localeCompare(prev.artist);
  });
  return sortedCollection;
};

RecordCollector.prototype.findRecordByTitle = function (title) {
  const foundRecord = this.collection.find((record) => {
    return record.title === title;
  });
  return foundRecord;
};

module.exports = RecordCollector;


```

<details>
<summary>
record_collector_spec.js
</summary>

```js
const assert = require('assert');
const RecordCollector = require('../record_collector.js');
const Record = require('../record.js');

describe('RecordCollector', function () {
  let recordCollector;

  beforeEach(function () {
    recordCollector = new RecordCollector();
  });

  it('should start with no funds', function () {
    assert.strictEqual(recordCollector.funds, 0);
  });

  it('should be able to add funds', function () {
    recordCollector.addFunds(1000);
    assert.strictEqual(recordCollector.funds, 1000);
  });

  it('should be able to report that it has more than an amount of funds', function () {
    recordCollector.addFunds(500);
    assert.strictEqual(recordCollector.hasFunds(1), true);
  });

  it('should be able to report that it has less than an amount of funds', function () {
    recordCollector.addFunds(1);
    assert.strictEqual(recordCollector.hasFunds(500), false);
  });

  it('should be able to subtract funds when it has enough funds', function () {
    recordCollector.addFunds(1000);
    recordCollector.subtractFunds(250);
    assert.strictEqual(recordCollector.funds, 750);
  });

  it('should not subtract funds when it does not have enough funds', function () {
    recordCollector.addFunds(250);
    recordCollector.subtractFunds(500);
    assert.strictEqual(recordCollector.funds, 250);
  });

  it('should start with an empty collection of records', function () {
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should be able to add records to it\'s collection', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    assert.deepStrictEqual(recordCollector.collection, [record]);
  });

  it('should be able to report if it has a record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    assert.strictEqual(recordCollector.hasRecord(record), true);
  });

  it('should be able to report if it does not have a record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    assert.strictEqual(recordCollector.hasRecord(record), false);
  });

  it('should be able to find a record by title', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    const foundRecord = recordCollector.findRecordByTitle('Their Greatest Hits 1971 - 1975');
    assert.deepStrictEqual(foundRecord, record);
  });

  it('should be able to remove a record from it\'s collection', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    recordCollector.removeRecordFromCollection(record);
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should be able to buy a record if it has enough funds', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addFunds(1500);
    recordCollector.buy(record);
    assert.strictEqual(recordCollector.funds, 500);
    assert.deepStrictEqual(recordCollector.collection, [record]);
  });

  it('should not be able to buy a record if it does not have enough funds', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addFunds(100);
    recordCollector.buy(record);
    assert.strictEqual(recordCollector.funds, 100);
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should be able to sell a record if it has the record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    recordCollector.sell(record);
    assert.strictEqual(recordCollector.funds, 1000);
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should not be able to sell a record if it does not have the record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.sell(record);
    assert.strictEqual(recordCollector.funds, 0);
  });

  it('should be able to sort its collection by artist name', function () {
    const eagles = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    const michaelJackson = new Record({
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'pop',
      price: 1000
    });
    const ledZeppelin = new Record({
      title: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      genre: 'rock',
      price: 1000
    });
    const records = [ledZeppelin, eagles, michaelJackson];
    records.forEach(record => recordCollector.addRecordToCollection(record));
    assert.deepStrictEqual(recordCollector.sortCollection(), [eagles, ledZeppelin, michaelJackson]);
  });
});


```

</details>
<br />
</details>
<details>
<summary>
transaction.js
</summary>

```js
const Transaction = function (buyer, seller) {
  this.buyer = buyer;
  this.seller = seller;
};

Transaction.prototype.exchange = function (record) {
  if (!this.exchangeIsValid(record)) return;
  this.seller.sell(record);
  this.buyer.buy(record);
};

Transaction.prototype.exchangeIsValid = function (record) {
  return this.seller.hasRecord(record) && this.buyer.hasFunds(record.price);
};

module.exports = Transaction;


```

<details>
<summary>
transaction_spec.js
</summary>

```js
const assert = require('assert');
const Transaction = require('../transaction.js');
const RecordCollector = require('../record_collector.js');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');

describe('Transaction', function () {
  let recordCollector;
  let recordStore;
  let record;
  let transaction;

  beforeEach(function () {
    recordCollector = new RecordCollector();
    recordStore = new RecordStore('HMV');
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    transaction = new Transaction(recordCollector, recordStore);
  });

  it('should have a buyer', function () {
    assert.deepStrictEqual(transaction.buyer, recordCollector);
  });

  it('should have a seller', function () {
    assert.deepStrictEqual(transaction.seller, recordStore);
  });

  it('should report a transaction is valid when the seller has the record and the buyer has enough funds', function () {
    recordCollector.addFunds(5000);
    recordStore.addRecordToStock(record);
    const actual = transaction.exchangeIsValid(record);
    assert.strictEqual(actual, true);
  });

  it('should report a transaction is invalid when the seller does not have the record but the buyer has enough funds', function () {
    recordCollector.addFunds(5000);
    const actual = transaction.exchangeIsValid(record);
    assert.strictEqual(actual, false);
  });

  it('should report a transaction is invalid when the seller has the record but the buyer does not have enough funds', function () {
    recordStore.addRecordToStock(record);
    const actual = transaction.exchangeIsValid(record);
    assert.strictEqual(actual, false);
  });

  it('should report a transaction is invalid when the seller does not have the record and the buyer does not have enough funds', function () {
    const actual = transaction.exchangeIsValid(record);
    assert.strictEqual(actual, false);
  });

  it('should be able handle a transaction where the seller has the record but the buyer does not have enough funds', function () {
    recordStore.addRecordToStock(record);
    transaction.exchange(recordCollector, recordStore, record);
    assert.strictEqual(recordStore.funds, 0);
    assert.strictEqual(recordCollector.funds, 0);
    assert.deepStrictEqual(recordCollector.collection, []);
    assert.deepStrictEqual(recordStore.stock, [record]);
  });

  it('should be able handle an exchange of a record', function () {
    recordCollector.addFunds(5000);
    recordStore.addRecordToStock(record);
    transaction.exchange(record);
    assert.strictEqual(recordStore.funds, 1000);
    assert.strictEqual(recordCollector.funds, 4000);
    assert.deepStrictEqual(recordCollector.collection, [record]);
    assert.deepStrictEqual(recordStore.stock, []);
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
Reading List App - Events Homework
</summary>
<br />
<details>
<summary>
Reading List - Brief
</summary>

## Events HW

#### Learning Objectives

- Be able to use a variety of event listener types
- Be able to access values from form inputs when on submit
- Be able to attach events to a variety of DOM elements
- Be able to read and write to the DOM

### Brief

Your task is to create a Reading List app that allow a user to submit items they intend to read later and view them on the page.

#### MVP

The app should have a form that allows users to submit reading list items. The form should have the following fields:

1. Title - text input
2. Author - text input
3. Category (e.g. book, article, blog post) - radio input
4. Genre and/or Topic - select

For information about using radio inputs:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

Once the user has submitted the form, the reading list item's details should be displayed below and the form's fields should reset to empty.

**Hint: Research `form.reset()`**

#### Planning

1. Create the HTML in index.html
2. Create the JavaScript file, app.js
3. Add a `script` tag to index.html to load the javascript
4. Add behaviour to the DOM elements' events

#### Extensions

1. Add validation to prevent the user submitting the form if the Title or Author fields are left blank. This can be done by adding the `required` attribute in the form fields in the html, but should also be done in the JavaScript to prevent anyone bypassing the HTML validation by editing the form in the browser devtools.
2. Add flexbox layout to the reading list so that items are displayed in a responsive grid. This will require researching how to add a class to a DOM element using JavaScript.

<br />
</details>
<details>
<summary>
index.html
</summary>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Reading List App</title>
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
    <script src="js/app.js"></script>
  </head>
  <body>
    <h1>Add to Reading List</h1>
    <form id="new-item-form">
      <div id="form-wrapper">
        <div class="form-item">
          <label for="title" class="primary">Title</label>
          <input type="text" id="title" required/>
        </div>

        <div class="form-item">
          <label for="author" class="primary">Author</label>
          <input type="text" id="author" required/>
        </div>

        <div class="form-item">
          <label for="category" class="primary">Category</label>
          <label for="book">Book</label>
          <input type="radio" name="category" id="book" value="Book"/>

          <label for="article">Article</label>
          <input type="radio" name="category" id="article" value="Article"/>

          <label for="blog">Blog Post</label>
          <input type="radio" name="category" id="blog" value="Blog Post"/>
        </div>

        <div class="form-item">
          <label for="subject" class="primary">Subject</label>
          <select id="genre">
            <option value="" disabled selected>Select a subject</option>
            <option value="Technology">Technology</option>
            <option value="Culture">Culture</option>
            <option value="Sport">Sport</option>
            <option value="Politics">Politics</option>
          </select>
        </div>
      </div>
      <input type="submit" value="save"/>
    </form>

    <button id="delete-all">Delete All</button>

    <h1>Reading List</h1>
    <ul id="reading-list"></ul>
  </body>
</html>

```
<br />
</details>
<details>
<summary>
main.css
</summary>

```css
body {
  font-family: Palatino;
}

#form-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.form-item {
  margin-right: 1.8rem;
}

label.primary {
  display: block;
  margin: 0.4em 0;
}

label::after {
  content: ":";
}

button, input[type="submit"] {
  margin-top: 1rem;
}

#reading-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

.reading-list-item {
  margin: 0.5rem 0.5rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid #20437c;
  border-radius: 5%;
  background: #ddeaff;
}

```
<br />
</details>
<details>
<summary>
index.html
</summary>

```js
document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const valuesToValidate = [event.target.title.value, event.target.author.value]
  if (areAnyValuesEmpty(valuesToValidate)) return;

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');

  const title = buildElement('h2', form.title.value);
  readingListItem.appendChild(title);
  const author = buildElement('h3', form.author.value);
  readingListItem.appendChild(author);
  const value = buildElement('p', form.category.value);
  readingListItem.appendChild(value);
  const genre = buildElement('p', form.genre.value);
  readingListItem.appendChild(genre);

  return readingListItem;
}

const areAnyValuesEmpty = function (values) {
  return values.some((value) => value === '');
}

const buildElement = function (tag, value) {
  const element = document.createElement(tag);
  element.textContent = value;
  return element;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}

```
</details>
<br />
</details>
<br />
</details>
