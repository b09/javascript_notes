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
