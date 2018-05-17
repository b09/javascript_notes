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
