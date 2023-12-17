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
  let additionalString = ''
  if (options['addition'] !== undefined) {
    additionalString = findAdditionalString(options['addition'], options['additionRepeatTimes'], options['additionSeparator'], true);
  }
  return findAdditionalString(str + additionalString, options['repeatTimes'], options['separator'], false);
}

function findAdditionalString(str, times = 1, separator, flag) {
  if (!separator && flag) {
    separator = '|';
  } else if (!separator && !flag) {
    separator = '+';
  }
  let string = '';
  for (let i = 0; i < times; i++) {
    string +=  str + separator;
  }
  if (separator) {
    string =  string.slice(0, -separator.length);
  }
  return string;
}

module.exports = {
  repeater
};
