const Record = require('../record.js');
const assert = require('assert');

describe('Record', function () {
  let record;

  beforeEach(function () {
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
  });

  it('should have a title', function () {
    assert.strictEqual(record.title, 'Their Greatest Hits 1971 - 1975');
  });

  it('should have an artist', function () {
    assert.strictEqual(record.artist, 'Eagles');
  });

  it('should have a genre', function () {
    assert.strictEqual(record.genre, 'rock');
  });

  it('should have a price', function () {
    assert.strictEqual(record.price, 1000);
  });
});
