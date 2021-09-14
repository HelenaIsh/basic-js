import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names ){
  const result = [];
  const count = {};
  for (const name of names) {
    if (name in count) {
      count[name]++
    } else {
      count[name] = 0;
    }
    if (!result.includes(name)) {
      result.push(name);
    } else {
      result.push(`${name}(${count[name]})`);
      if (`${name}(${count[name]})` in count) {
        count[`${name}(${count[name]})`]+=1;
      } else {
        count[`${name}(${count[name]})`]=0;
      }
    }

  }
  return result
}
