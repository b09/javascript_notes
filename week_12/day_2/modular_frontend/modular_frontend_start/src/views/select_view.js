const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;

  });
};

SelectView.prototype.populate = function(animalsData){
  animalsData.forEach((animal, index) => {
    const option = document.createElement('option');
    option.textContent = animal.species;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
