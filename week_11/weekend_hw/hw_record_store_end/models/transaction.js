const Transaction = function (buyer, seller) {
  this.buyer = buyer;
  this.seller = seller;
};

Transaction.prototype.exchange = function (record) {
  if (!this.exchangeIsValid(record)) return;
  this.seller.sell(record);
  this.buyer.buy(record);
};

Transaction.prototype.exchangeIsValid = function (record) {
  return this.seller.hasRecord(record) && this.buyer.hasFunds(record.price);
};

module.exports = Transaction;
