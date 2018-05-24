const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const NumberFact = function () {
};

NumberFact.prototype.bindEvents = function () {
  PubSub.subscribe('NumberFormView:submit', (evt) => {
    this.handleNumberSubmit(evt.detail);
  })
};

NumberFact.prototype.getData = function (number) {
  const url = `http://numbersapi.com/${ number }?json`;
  request = new Request(url);
  request.get((data) => {
    PubSub.publish('NumberFact:data-ready', data);
  });
};

NumberFact.prototype.handleNumberSubmit = function (number) {
  this.getData(number);
};

module.exports = NumberFact;
