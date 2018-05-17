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
