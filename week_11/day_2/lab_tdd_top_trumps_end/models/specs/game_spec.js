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
