const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members.filter(value => typeof value === "string")
                .map(value => value.toUpperCase().trim())
                .sort()
                .map(value => value[0])
                .join('');
};
