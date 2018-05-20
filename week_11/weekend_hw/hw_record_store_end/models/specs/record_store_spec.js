const assert = require('assert');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');

describe('RecordStore', function () {
  let recordStore;

  beforeEach(function () {
    recordStore = new RecordStore('HMV');
  });

  it('should have a name', function () {
    assert.strictEqual(recordStore.name, 'HMV');
  });

  it('should start with no funds', function () {
    assert.strictEqual(recordStore.funds, 0);
  });

  it('should be able to add funds', function () {
    recordStore.addFunds(50000);
    assert.strictEqual(recordStore.funds, 50000);
  });

  it('should start with an empty collection of records', function () {
    assert.deepStrictEqual(recordStore.stock, []);
  });

  it('should be able to add a record to its stock', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(record);
    assert.deepStrictEqual(recordStore.stock, [record]);
  });

  it('should be able to report if it has a record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(record);
    assert.strictEqual(recordStore.hasRecord(record), true);
  });

  it('should be able to report if it does not have a record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    assert.strictEqual(recordStore.hasRecord(record), false);
  });

  it('should be able to remove a record from its stock', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(record);
    recordStore.removeRecordFromStock(record);
    assert.deepStrictEqual(recordStore.stock, []);
  });

  it('should be able to sell a record if it has the record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.addRecordToStock(record);
    recordStore.sell(record);
    assert.strictEqual(recordStore.funds, 1000);
    assert.deepStrictEqual(recordStore.stock, []);
  });

  it('should not be able to sell a record if it does not have the record', function () {
    const record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    recordStore.sell(record);
    assert.strictEqual(recordStore.funds, 0);
  });

  it('should be able to find all records which match a given genre', function () {
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
    recordStore.addRecordToStock(eagles);
    recordStore.addRecordToStock(michaelJackson);
    recordStore.addRecordToStock(ledZeppelin);
    const actual = recordStore.findRecord({ genre: 'rock' });
    assert.deepStrictEqual(actual, [eagles, ledZeppelin]);
  });

  it('should be able to find all records which match a given title', function () {
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
    recordStore.addRecordToStock(eagles);
    recordStore.addRecordToStock(michaelJackson);
    recordStore.addRecordToStock(ledZeppelin);
    const actual = recordStore.findRecord({ title: 'Thriller' });
    assert.deepStrictEqual(actual, [michaelJackson]);
  });

  it('should be able to find all records which match a given artist', function () {
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
    recordStore.addRecordToStock(eagles);
    recordStore.addRecordToStock(michaelJackson);
    recordStore.addRecordToStock(ledZeppelin);
    const actual = recordStore.findRecord({ artist: 'Led Zeppelin' });
    assert.deepStrictEqual(actual, [ledZeppelin]);
  });

  it('should be able to find all records which match on multiple attributes', function () {
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
    recordStore.addRecordToStock(eagles);
    recordStore.addRecordToStock(michaelJackson);
    recordStore.addRecordToStock(ledZeppelin);
    const actual = recordStore.findRecord({
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'pop'
    });
    assert.deepStrictEqual(actual, [michaelJackson]);
  });
});
