const RecordStore = function (name) {
  this.name = name;
  this.funds = 0;
  this.stock = [];
};

RecordStore.prototype.findRecord = function (query) {
  const foundRecords = this.stock.filter((record) => {
    return Object.keys(query).every((attribute) => {
      return record[attribute] === query[attribute];
    });
  });
  return foundRecords;
};

RecordStore.prototype.addFunds = function (amount) {
  this.funds += amount;
};

RecordStore.prototype.addRecordToStock = function (record) {
  this.stock.push(record);
};

RecordStore.prototype.sell = function (record) {
  if (!this.hasRecord(record)) return;
  this.addFunds(record.price);
  this.removeRecordFromStock(record);
};

RecordStore.prototype.hasRecord = function (record) {
  return this.stock.includes(record);
};

RecordStore.prototype.removeRecordFromStock = function (record) {
  if (!this.hasRecord(record)) return;
  const index = this.stock.indexOf(record);
  this.stock.splice(index, 1);
};

module.exports = RecordStore;
