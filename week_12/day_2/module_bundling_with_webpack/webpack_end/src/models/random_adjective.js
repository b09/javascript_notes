const RandomAdjective = function () {
  this.adjectives = [
    'bada',
    'beautiful',
    'boring',
    'disasterous',
    'dreary',
    'fabulous',
    'good',
    'magical',
    'top-notch',
    'wonderful'
  ];
}

RandomAdjective.prototype.get = function () {
  const randomIndex = Math.floor(Math.random() * this.adjectives.length);
  return this.adjectives[randomIndex];
}

module.exports = RandomAdjective;
