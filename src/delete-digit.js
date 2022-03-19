const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr.concat([]);
    tempArr.splice(i, 1);
    console.log(tempArr)
    if (Number(tempArr.join('')) > max) {
        max = Number(tempArr.join(''))
        }
  }
  return max;
}

module.exports = {
  deleteDigit
};
