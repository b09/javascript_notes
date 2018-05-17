
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
Scope Homework Solution: Who Dunnit
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
        cards.js
      </summary>
        <details>
          <summary>
            cards_spec.js
          </summary>
        </details>
        <br />
    </details>
    <details>
      <summary>
        game.js
      </summary>
      <details>
        <summary>
          game_spec.js
        </summary>
      </details>
      <br />
    </details>
    <details>
      <summary>
      player.js
      </summary>
        <details>
          <summary>
          player_spec.js
          </summary>
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
        cards.js
      </summary>
        <details>
          <summary>
            cards_spec.js
          </summary>
        </details>
        <br />
    </details>
    <details>
      <summary>
        game.js
      </summary>
      <details>
        <summary>
          game_spec.js
        </summary>
      </details>
      <br />
    </details>
    <details>
      <summary>
      player.js
      </summary>
        <details>
          <summary>
          player_spec.js
          </summary>
        </details>
        <br />
    </details>
    <br />
</details>
