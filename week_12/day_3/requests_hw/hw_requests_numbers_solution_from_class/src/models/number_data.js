const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const NumberData = function () {

}

NumberData.prototype.setUpNumberListener = function () {
  PubSub.subscribe('NumberFormView:submit', (event) => {
    const inputtedNumber = event.detail;
    this.getNumber(inputtedNumber);
  });
};

NumberData.prototype.getNumber = function (number) {
  const url = `http://numbersapi.com/${number}?json`
  const request = new Request(url);
  request.get((data) => {
    PubSub.publish('NumberData:fact-ready', data);
  });
};

module.exports = NumberData;
