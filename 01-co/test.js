var co = require('co');
var assert = require('chai').assert;

var fs = require('./index.js');

describe('.stats()', function () {
  it('should stat this file', co.wrap(function* () {
    var stats = yield fs.stat(__filename);
    assert.ok(true);
  }))

  it('should throw on a nonexistent file', co.wrap(function* () {
    try {
      yield fs.stat(__filename + 'lkjaslkdjflaksdfasdf');
      // the above expression should throw,
      // so this error will never be thrown
      throw new Error('nope');
    } catch (err) {
      assert(err.message !== 'nope');
    }
  }))
})

describe('.exists()', function () {
  it('should find this file', co.wrap(function* () {
    var a = yield fs.exists(__filename);
    console.log('-----');
    console.log("" + a);
    assert.equal(true, a)
  }));

  it('should return false for a nonexistent file', co.wrap(function* () {
    assert.equal(false, yield fs.exists(__filename + 'kljalskjdfklajsdf'))
  }))
})
