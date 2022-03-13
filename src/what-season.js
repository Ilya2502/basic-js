const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date=null) {
  if (date === null) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getUTCMonth();
  } catch {
    throw new Error('Invalid date!');
  }

  if (date.getUTCMonth() < 2) {
    return 'winter';
  } else if (date.getUTCMonth() < 5) {
    return 'spring';
  } else if (date.getUTCMonth() < 8) {
    return 'summer';
  } else if (date.getUTCMonth() < 11) {
    return 'autumn';
  }
  return 'winter';
}

module.exports = {
  getSeason
};
