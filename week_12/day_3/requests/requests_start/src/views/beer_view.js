const PubSub = require('../helpers/pub_sub.js');

const BeerView = function (container) {
  this.container = container;
}

BeerView.prototype.bindEvents = function () {
  PubSub.subscribe('BeerData:beer-loaded', (evt) => {
    this.render(evt.detail);
  });
}

BeerView.prototype.render = function (beer) {
  const beerName = document.createElement('p');
  const beerDescription = document.createElement('p');
  const beerAbv = document.createElement('p');
  beerName.textContent = beer.name;
  beerDescription.textContent = beer.description;
  beerAbv.textContent = beer.abv + '%';
  this.container.appendChild(beerName);
  this.container.appendChild(beerDescription);
  this.container.appendChild(beerAbv);
}

module.exports = BeerView;
