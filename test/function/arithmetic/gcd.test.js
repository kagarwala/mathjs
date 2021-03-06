// test gcd
var assert = require('assert');
var math = require('../../../index.js'),
    gcd = math.gcd;

describe('gcd', function() {
  it('should find the greatest common divisor of two or more numbers', function() {
    assert.equal(gcd(12, 8), 4);
    assert.equal(gcd(8, 12), 4);
    assert.equal(gcd(8, -12), 4);
    assert.equal(gcd(-12, 8), 4);
    assert.equal(gcd(12, -8), 4);
    assert.equal(gcd(15, 3), 3);
    assert.equal(gcd(3, 0), 3);
    assert.equal(gcd(-3, 0), 3);
    assert.equal(gcd(0, 3), 3);
    assert.equal(gcd(0, -3), 3);
    assert.equal(gcd(0, 0), 0);
    assert.equal(gcd(25, 15, -10, 30), 5);

    assert.equal(gcd(1, 1), 1);
    assert.equal(gcd(-1, -1), 1);
    assert.equal(gcd(1, 0), 1);
    assert.equal(gcd(-1, 0), 1);
    assert.equal(gcd(0, 1), 1);
    assert.equal(gcd(0, -1), 1);
    assert.equal(gcd(0, 0), 0);
  });

  it('should find the greatest common divisor of booleans', function() {
    assert.equal(gcd(true, true), 1);
    assert.equal(gcd(true, false), 1);
    assert.equal(gcd(false, true), 1);
    assert.equal(gcd(false, false), 0);
  });

  it('should throw an error if only one argument', function() {
    assert.throws(function () {gcd(1); }, SyntaxError, 'Wrong number of arguments in function gcd (3 provided, 1-2 expected)');
  })

  it('should throw an error with complex numbers', function() {
    assert.throws(function () {gcd(math.complex(1,3),2); }, TypeError, 'Function gcd(complex, number) not supported');
  });

  it('should throw an error with strings', function() {
    assert.throws(function () {gcd('a', 2); }, TypeError, 'Function gcd(string, number) not supported');
    assert.throws(function () {gcd(2, 'a'); }, TypeError, 'Function gcd(number, string) not supported');
  });

  it('should throw an error with units', function() {
    assert.throws(function () { gcd(math.unit('5cm'), 2); }, TypeError, 'Function gcd(unit, number) not supported');
  });

  it('should find the greatest common divisor element-wise in a matrix', function() {
    assert.deepEqual(gcd([5,2,3], [25,3,6]), [5, 1, 3]);
  });

});