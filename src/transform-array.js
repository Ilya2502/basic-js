const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    arr.filter(item => item === null);
  } catch {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (arr[i+1] !== undefined) {
          i += 1;
        }
        break;
      case '--discard-prev':
        if (result[result.length-1] !== undefined && arr[i-2] !== '--discard-next') {
          result.pop();
        }
        break;
      case '--double-next':
        if (arr[i+1] !== undefined) {
          result.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if (result[i-1] !== undefined) {
          result.push(result[result.length - 1]);
        }
        break;
      default:
        result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  transform
};
