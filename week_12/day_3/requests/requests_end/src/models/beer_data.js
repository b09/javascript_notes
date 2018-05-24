const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js')

const BeerData = function () {
  this.randomBeer = null;
}

BeerData.prototype.getData = function () {
    const request = new Request('https://api.punkapi.com/v2/beers/random');
    request.get((data) => {
      this.randomBeer = data[0];
      PubSub.publish('BeerData:beer-loaded', this.randomBeer);
    })

}

module.exports = BeerData;
