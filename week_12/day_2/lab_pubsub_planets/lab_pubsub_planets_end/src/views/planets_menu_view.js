const PubSub = require('../helpers/pub_sub.js');

const PlanetsMenuView = function(menuItems) {
  this.menuItems = menuItems;
};

PlanetsMenuView.prototype.bindEvents = function() {
  this.menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (evt) => {
      const selectedPlanetName = evt.target.id;
      PubSub.publish('PlanetsMenuView:selected', selectedPlanetName);
    });
  });
};

module.exports = PlanetsMenuView;
