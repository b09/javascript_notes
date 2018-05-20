const assert = require('assert');
const RecordCollector = require('../record_collector.js');
const Record = require('../record.js');

describe('RecordCollector', function () {
  let recordCollector;

  beforeEach(function () {
    recordCollector = new RecordCollector();
  });

  it('should start with no funds', function () {
    assert.strictEqual(recordCollector.funds, 0);
  });

  it('should be able to add funds', function () {
    recordCollector.addFunds(1000);
    assert.strictEqual(recordCollector.funds, 1000);
  });

  it('should be able to report that it has more than an amount of funds', function () {
    recordCollector.addFunds(500);
    assert.strictEqual(recordCollector.hasFunds(1), true);
  });

  it('should be able to report that it has less than an amount of funds', function () {
    recordCollector.addFunds(1);
    assert.strictEqual(recordCollector.hasFunds(500), false);
  });

  it('should be able to subtract funds when it has enough funds', function () {
    recordCollector.addFunds(1000);
    recordCollector.subtractFunds(250);
    assert.strictEqual(recordCollector.funds, 750);
  });

  it('should not subtract funds when it does not have enough funds', function () {
    recordCollector.addFunds(250);
    recordCollector.subtractFunds(500);
    assert.strictEqual(recordCollector.funds, 250);
  });

  it('should start with an empty collection of records', function () {
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should be able to add records to it\'s collection', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    assert.deepStrictEqual(recordCollector.collection, [record]);
  });

  it('should be able to report if it has a record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    assert.strictEqual(recordCollector.hasRecord(record), true);
  });

  it('should be able to report if it does not have a record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    assert.strictEqual(recordCollector.hasRecord(record), false);
  });

  it('should be able to find a record by title', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    const foundRecord = recordCollector.findRecordByTitle('Their Greatest Hits 1971 - 1975');
    assert.deepStrictEqual(foundRecord, record);
  });

  it('should be able to remove a record from it\'s collection', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    recordCollector.removeRecordFromCollection(record);
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should be able to buy a record if it has enough funds', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addFunds(1500);
    recordCollector.buy(record);
    assert.strictEqual(recordCollector.funds, 500);
    assert.deepStrictEqual(recordCollector.collection, [record]);
  });

  it('should not be able to buy a record if it does not have enough funds', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addFunds(100);
    recordCollector.buy(record);
    assert.strictEqual(recordCollector.funds, 100);
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should be able to sell a record if it has the record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.addRecordToCollection(record);
    recordCollector.sell(record);
    assert.strictEqual(recordCollector.funds, 1000);
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should not be able to sell a record if it does not have the record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordCollector.sell(record);
    assert.strictEqual(recordCollector.funds, 0);
  });

  it('should be able to sort its collection by artist name', function () {
    const eagles = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    const michaelJackson = new Record({
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'pop',
      price: 1000
    });
    const ledZeppelin = new Record({
      title: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      genre: 'rock',
      price: 1000
    });
    const records = [ledZeppelin, eagles, michaelJackson];
    records.forEach(record => recordCollector.addRecordToCollection(record));
    assert.deepStrictEqual(recordCollector.sortCollection(), [eagles, ledZeppelin, michaelJackson]);
  });
});
