const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {};
  if (domains.length === 0) {
    return obj;
  }
  let arrMod = domains.map(item => item.split('.')).sort((a, b) => b.length - a.length);
  for (let i = 0; i < arrMod[0].length; i++) {
    arrMod.filter(item => item.length >= i + 1).forEach(item => {
      obj['.' + item.slice(-1 - i).reverse().join('.')] === undefined ? 
        obj['.' + item.slice(-1 - i).reverse().join('.')] = 1 : 
      obj['.' + item.slice(-1 - i).reverse().join('.')] += 1;
    })
  }
  return obj;
}

module.exports = {
  getDNSStats
};
