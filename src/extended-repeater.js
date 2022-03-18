const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.repeatTimes === undefined) {
    return options.additionRepeatTimes === undefined ? String(str) + String(options.addition) : String(str) + createAdd(addition, additionRepeatTimes, additionSeparator);
  }
  let result = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    result[i] = String(str) + createAdd(options.addition, options.additionRepeatTimes, options.additionSeparator);
    }
  return options.separator === undefined ? result.join('+') : result.join(options.separator)
}

function createAdd(addition, additionRepeatTimes, additionSeparator) {
  let result = [];
  if (addition === undefined) {
    return '';
  } else if (additionRepeatTimes === undefined) {
    return String(addition);
  }
  for (let i = 0; i < additionRepeatTimes; i++) {
    result[i] = String(addition);
  }
  return additionSeparator === undefined ? result.join('|') : result.join(additionSeparator)
}

module.exports = {
  repeater
};
