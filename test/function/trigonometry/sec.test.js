var assert = require('assert'),
    math = require('../../../index.js'),
    approx = require('../../../tools/approx.js'),
    pi = math.pi,
    complex = math.complex,
    matrix = math.matrix,
    unit = math.unit,
    sec = math.sec;

describe('sec', function() {
  it('should return the secant of a boolean', function () {
    approx.equal(sec(true), 1.85081571768093);
    approx.equal(sec(false), Infinity);
  });

  it('should return the secant of a number', function() {
    approx.equal(1 / sec(0), 1);
    approx.equal(1 / sec(pi*1/4), 0.707106781186548);
    approx.equal(1 / sec(pi*1/8), 0.923879532511287);
    approx.equal(1 / sec(pi*2/4), 0);
    approx.equal(1 / sec(pi*3/4), -0.707106781186548);
    approx.equal(1 / sec(pi*4/4), -1);
    approx.equal(1 / sec(pi*5/4), -0.707106781186548);
    approx.equal(1 / sec(pi*6/4), 0);
    approx.equal(1 / sec(pi*7/4), 0.707106781186548);
    approx.equal(1 / sec(pi*8/4), 1);
    approx.equal(1 / sec(pi/4), math.sqrt(2)/2);

    approx.equal(math.pow(sec(pi/4), 2), 2);
    approx.equal(sec(0), 1);
    approx.equal(sec(pi), -1);
    approx.equal(sec(-pi), -1);
    approx.equal(math.pow(sec(-pi/4), 2), 2);
    approx.equal(sec(2*pi), 1);
    approx.equal(sec(-2*pi), 1);
  });

  it('should return the secant of a complex number', function() {
    var re = 0.0416749644111443,
        im = 0.0906111371962376;
    approx.deepEqual(sec(complex('2+3i')), complex(-re, im));
    approx.deepEqual(sec(complex('2-3i')), complex(-re, -im));
    approx.deepEqual(sec(complex('-2+3i')), complex(-re, -im));
    approx.deepEqual(sec(complex('-2-3i')), complex(-re, im));
    approx.deepEqual(sec(complex('i')), complex(0.648054273663885, 0));
    approx.deepEqual(sec(complex('1')), complex(1.85081571768093, 0));
    approx.deepEqual(sec(complex('1+i')), complex(0.498337030555187, 0.591083841721045));
  });

  it('should return the secant of an angle', function() {
    approx.equal(sec(unit('45deg')), 1.41421356237310);
    approx.equal(sec(unit('-45deg')), 1.41421356237310);
  });

  it('should throw an error if called with an invalid unit', function() {
    assert.throws(function () {sec(unit('5 celsius'))});
  });

  it('should throw an error if called with a string', function() {
    assert.throws(function () {sec('string')});
  });

  var sec123 = [1.85081571768093, -2.40299796172238, -1.01010866590799];

  it('should return the secant of each element of an array', function() {
    approx.deepEqual(sec([1,2,3]), sec123);
  });

  it('should return the secant of each element of a matrix', function() {
    approx.deepEqual(sec(matrix([1,2,3])), matrix(sec123));
  });

});