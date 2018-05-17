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
