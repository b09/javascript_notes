const PubSub = require('../helpers/pub_sub.js');

const NumberFactView = function (element) {
  this.element = element;
};

NumberFactView.prototype.bindEvents = function () {
  PubSub.subscribe(`NumberFact:data-ready`, evt => {
    this.render(evt.detail);
  });
};

NumberFactView.prototype.render = function (fact) {
  const numberElement = this.createElement(`number`, `Number`, fact.number);
  const factElement = this.createElement(`fact`, `Fact`, fact.text);

  this.element.appendChild(numberElement);
  this.element.appendChild(factElement);
};

NumberFactView.prototype.createElement = function (id, label, text) {
  const element = document.createElement('p');
  element.id = id;
  element.textContent = `${label}: ${text}`;
  return element;
};

module.exports = NumberFactView;
