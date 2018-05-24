const PubSub = require('../helpers/pub_sub.js');

const MenuView = function (element) {
  this.element = element;
};

MenuView.prototype.bindEvents = function () {
  PubSub.subscribe('Continents:continent-names-ready', (evt) => {
    this.render(evt.detail);
  });
};

MenuView.prototype.render = function (continents) {
  continents.forEach((continent, index) => {
    const menuItem = this.createItem(continent, index);
    this.element.appendChild(menuItem);
  });
};

MenuView.prototype.createItem = function (continent, id) {
  const menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');
  menuItem.textContent = this.validateContinent(continent);
  menuItem.id = id;

  menuItem.addEventListener('click', (evt) => {
    PubSub.publish('MenuView:selected', evt.target.id)
  });

  return menuItem;
};

MenuView.prototype.validateContinent = function (continent) {
  return continent || 'Other';
};

module.exports = MenuView;
