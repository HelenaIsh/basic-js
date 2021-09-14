import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let result = '';
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      temp++;
    } else {
      result += temp === 1 ? str[i] : `${temp}${str[i]}`;
      temp = 1;

    }
  }
  return result
}
