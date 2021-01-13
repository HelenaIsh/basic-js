const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for (const row of matrix) {
    result += row.filter(value => value === '^^').length;
  }
  return result;
};
