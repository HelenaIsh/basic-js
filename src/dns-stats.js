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
  let result = {}
  for (let domain of domains) {
    let arr = domain.split('.');
    let subResult = '';
    for (let i = arr.length - 1; i >= 0; i--) {
      subResult += `.${arr[i]}`;
      if (subResult in result) {
        result[subResult]++;
      } else {
        result[subResult]=1
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
