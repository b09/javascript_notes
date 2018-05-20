const RecordCollector = function () {
  this.funds = 0;
  this.collection = [];
};

RecordCollector.prototype.buy = function (record) {
  if (!this.hasFunds(record.price)) return;
  this.subtractFunds(record.price);
  this.addRecordToCollection(record);
};

RecordCollector.prototype.sell = function (record) {
  if (!this.hasRecord(record)) return;
  this.addFunds(record.price);
  this.removeRecordFromCollection(record);
};

RecordCollector.prototype.hasFunds = function (amount) {
  return this.funds >= amount;
};

RecordCollector.prototype.subtractFunds = function (amount) {
  if (!this.hasFunds(amount)) return;
  this.funds -= amount;
};

RecordCollector.prototype.addFunds = function (amount) {
  this.funds += amount;
};

RecordCollector.prototype.hasRecord = function (record) {
  return this.collection.includes(record);
};

RecordCollector.prototype.addRecordToCollection = function (record) {
  this.collection.push(record);
};

RecordCollector.prototype.removeRecordFromCollection = function (record) {
  if (!this.hasRecord(record)) return;
  const index = this.collection.indexOf(record);
  this.collection.splice(index, 1);
};

RecordCollector.prototype.sortCollection = function () {
  const sortedCollection = this.collection.sort((next, prev) => {
    return next.artist.localeCompare(prev.artist);
  });
  return sortedCollection;
};

RecordCollector.prototype.findRecordByTitle = function (title) {
  const foundRecord = this.collection.find((record) => {
    return record.title === title;
  });
  return foundRecord;
};

module.exports = RecordCollector;
