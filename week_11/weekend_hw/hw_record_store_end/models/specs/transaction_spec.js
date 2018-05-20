const assert = require('assert');
const Transaction = require('../transaction.js');
const RecordCollector = require('../record_collector.js');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');

describe('Transaction', function () {
  let recordCollector;
  let recordStore;
  let record;
  let transaction;

  beforeEach(function () {
    recordCollector = new RecordCollector();
    recordStore = new RecordStore('HMV');
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    transaction = new Transaction(recordCollector, recordStore);
  });

  it('should have a buyer', function () {
    assert.deepStrictEqual(transaction.buyer, recordCollector);
  });

  it('should have a seller', function () {
    assert.deepStrictEqual(transaction.seller, recordStore);
  });

  it('should report a transaction is valid when the seller has the record and the buyer has enough funds', function () {
    recordCollector.addFunds(5000);
    recordStore.addRecordToStock(record);
    const actual = transaction.exchangeIsValid(record);
    assert.strictEqual(actual, true);
  });

  it('should report a transaction is invalid when the seller does not have the record but the buyer has enough funds', function () {
    recordCollector.addFunds(5000);
    const actual = transaction.exchangeIsValid(record);
    assert.strictEqual(actual, false);
  });

  it('should report a transaction is invalid when the seller has the record but the buyer does not have enough funds', function () {
    recordStore.addRecordToStock(record);
    const actual = transaction.exchangeIsValid(record);
    assert.strictEqual(actual, false);
  });

  it('should report a transaction is invalid when the seller does not have the record and the buyer does not have enough funds', function () {
    const actual = transaction.exchangeIsValid(record);
    assert.strictEqual(actual, false);
  });

  it('should be able handle a transaction where the seller has the record but the buyer does not have enough funds', function () {
    recordStore.addRecordToStock(record);
    transaction.exchange(recordCollector, recordStore, record);
    assert.strictEqual(recordStore.funds, 0);
    assert.strictEqual(recordCollector.funds, 0);
    assert.deepStrictEqual(recordCollector.collection, []);
    assert.deepStrictEqual(recordStore.stock, [record]);
  });

  it('should be able handle an exchange of a record', function () {
    recordCollector.addFunds(5000);
    recordStore.addRecordToStock(record);
    transaction.exchange(record);
    assert.strictEqual(recordStore.funds, 1000);
    assert.strictEqual(recordCollector.funds, 4000);
    assert.deepStrictEqual(recordCollector.collection, [record]);
    assert.deepStrictEqual(recordStore.stock, []);
  });
});
