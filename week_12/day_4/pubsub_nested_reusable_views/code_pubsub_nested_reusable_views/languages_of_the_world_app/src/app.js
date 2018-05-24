const MenuView = require('./views/menu_view.js');
const ContinentView = require('./views/continent_view.js');
const Continents = require('./models/continents.js');

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul#menu');
  const menuView = new MenuView(menuContainer);
  menuView.bindEvents();

  const continentContainer = document.querySelector('#continent');
  const continentView = new ContinentView(continentContainer);
  continentView.bindEvents();

  const continents = new Continents();
  continents.bindEvents();
  continents.getData();
});
