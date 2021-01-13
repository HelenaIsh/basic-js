const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next'){
      if (arr[i+2] === '--discard-prev' || arr[i+2] === '--double-prev') {
        i++;
      }
      i++;
    } else if (arr[i] === '--discard-prev') {
      result.pop();
    } else if (arr[i] === '--double-next') {
      if (arr[i+1] !== undefined) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (result.length > 0){
        result.push(result[result.length - 1]);
      }
    } else if (arr[i] !== undefined) {
      result.push(arr[i]);
    }
  }
  return result;
};
