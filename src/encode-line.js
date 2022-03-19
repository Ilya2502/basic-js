const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
   if (str.length === 0) {
     return '';
   }
  let result = "";
  let tempStr = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count += 1;
    } else {
      count === 1 ? result += tempStr : result += `${count}${tempStr}`;
      tempStr = str[i];
      count = 1;
    }
  }
  return count === 1 ? result + tempStr : result + `${count}${tempStr}`;
}

module.exports = {
  encodeLine
};
