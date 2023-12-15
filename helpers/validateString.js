/**
 * Receives an string as a parameter, if this one is undefined, empty or not
 * a type string returns false. If the first validations are wrong returns true.
 * @param {string} value
 * @returns {boolean}
 */
const validateString = (value) => {
  if (
    typeof value === "undefined" ||
    typeof value !== "string" ||
    value === ""
  ) {
    return false;
  }
  return true;
};

export default validateString;
