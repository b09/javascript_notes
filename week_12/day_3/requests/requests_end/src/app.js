const BeerData = require('./models/beer_data.js');
const BeerView = require('./views/beer_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const beerData = new BeerData();
  beerData.getData();

  const beerContainer = document.querySelector('#beer-container');
  const beerView = new BeerView(beerContainer);
  beerView.bindEvents();
});
