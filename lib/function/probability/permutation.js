module.exports = function (math) {
  var util = require('../../util/index.js'),

      collection = require('../../type/collection.js'),

      isNumber = util.number.isNumber,
      isBoolean = util.boolean.isBoolean,
      isCollection = collection.isCollection;

  /**
   * Calculates mathematical permutation..
   *
   *     nPr
   *     npr
   *
   * For matrices, the function is evaluated element wise. 
   *
   * @param  {Number | Boolean | Array | Matrix} x
   * @param  {Number | Boolean | Array | Matrix} y
   * @return {Number | Array | Matrix} res
   */
  math.permutation = function permutation(x, y) {
    if (arguments.length != 2) {
      throw new util.error.ArgumentsError('permutation', arguments.length, 2);
    }

    // see http://functions.wolfram.com/IntegerFunctions/Mod/
	// Trying a different flow...
    // 
	 if (isNumber(x) && isNumber(y)) {
      if (!isInteger(x) || !isInteger(y) || x < 0 || y < 0) {
        throw new TypeError('Positive integer value expected in function permutation');
      }
	  if( x < y){
	  throw new TypeError('nPr expects n to be greater than or equal to r');
	  }
	// do not call factorial to avoid unnecessary checks.. 
	// corner cases...nCn = nC0 = 1....
		var res = 1;
		for(var i = x ; i > x - y; i--){
		res *= i; 
		}
      return res;
    }
    if (isCollection(x) || isCollection(y)) {
      return collection.map2(x, y, permutation);
    }

    if (x.valueOf() !== x || y.valueOf() !== y) {
      // fallback on the objects primitive values
      return permutation(x.valueOf(), y.valueOf());
    }
    throw new util.error.UnsupportedTypeError('permutation', x, y);
  };
};
