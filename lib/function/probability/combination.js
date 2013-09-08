module.exports = function (math) {
  var util = require('../../util/index.js'),

      collection = require('../../type/collection.js'),

      isNumber = util.number.isNumber,
      isBoolean = util.boolean.isBoolean,
      isCollection = collection.isCollection;

  /**
   * Calculates mathematical combination..
   *
   *     nCr
   *     ncr
   *
   * For matrices, the function is evaluated element wise. 
   *
   * @param  {Number | Boolean | Array | Matrix} x
   * @param  {Number | Boolean | Array | Matrix} y
   * @return {Number | Array | Matrix} res
   */
  math.combination = function combination(x, y) {
    if (arguments.length != 2) {
      throw new util.error.ArgumentsError('combination', arguments.length, 2);
    }

    // see http://functions.wolfram.com/IntegerFunctions/Mod/
	// Trying a different flow...
    // 
	 if (isNumber(x) && isNumber(y)) {
      if (!isInteger(x) || !isInteger(y) || x < 0 || y < 0) {
        throw new TypeError('Positive integer value expected in function combination');
      }
	  if( x < y){
	  throw new TypeError('nCr expects n to be greater than or equal to r');
	  }
	// do not call factorial to avoid unnecessary checks.. 
	// corner cases...nCn = nC0 = 1....
		var res1 = 1;
		var r = ( y > x/2) ? x - y : y; // nCr = nCr-1..will save some cycles
		for(var i = x ; i > x - r; i--){
		res1 *= i; 
		}
		var res2 = 1;// will take care of 0 && 1...
		for(var i = 2; i <= r; i++){
		res2 *= i;
		}
      return res1/res2;
    }
    if (isCollection(x) || isCollection(y)) {
      return collection.map2(x, y, combination);
    }

    if (x.valueOf() !== x || y.valueOf() !== y) {
      // fallback on the objects primitive values
      return combination(x.valueOf(), y.valueOf());
    }
    throw new util.error.UnsupportedTypeError('mod', x, y);
  };
};
