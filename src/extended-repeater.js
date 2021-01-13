const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let additionalString = ''
    if (options['addition'] !== undefined) {
        additionalString = findAdditionalString(options['addition'], options['additionRepeatTimes'], options['additionSeparator']);
    }
    const result = findAdditionalString(str+additionalString, options['repeatTimes'], options['separator']);
    return result;
};

function findAdditionalString(str, times = 1, separator='+') {
    let string = '';
    for (let i = 0; i < times; i++) {
        string +=  str + separator;
    }
    if (separator) {
        string =  string.slice(0, -separator.length);
    }
    return string;
}
  