import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2 ) {
  const obj1 = {};
  const obj2 = {};
  let result = 0;
  for (let letter of s1) {
    if (letter in obj1) {
      obj1[letter] ++;
    } else {
      obj1[letter] = 1;
    }
  }
  for (let letter of s2) {
    if (letter in obj2) {
      obj2[letter] ++;
    } else {
      obj2[letter] = 1;
    }
  }
  for (const [letter, count] of Object.entries(obj1)) {
    if (letter in obj2) {
      result += Math.min(count, obj2[letter]);
    }
  }
  return result;
}
