const PubSub = require('../helpers/pub_sub.js');

const Success = function() {

}

Success.prototype.setUpListenerForFact = function () {
  PubSub.subscribe('NumberData:fact-ready', (event) => {
    this.displayFact(event.detail);
  })
};

Success.prototype.displayFact = function (fact) {
  const container = document.querySelector('#number-fact');
  const paragraph = document.createElement('p');
  paragraph.textContent = fact.text;
  container.appendChild(paragraph);
};

module.exports = Success;
