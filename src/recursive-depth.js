const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let element of arr){
      let temp = 1;
      if (Array.isArray(element)){
        temp = temp + this.calculateDepth(element);
        depth = Math.max(temp, depth);
      }
    }
    return depth;
  }
};