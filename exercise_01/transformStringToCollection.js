import validateString from "../helpers/validateString.js";
/**
 * Define 'transformStringToArray' function and signature (JSDocs)
 *
 * input:
 *  - value: any
 *  - onError: function
 *  - onSuccess: function
 *
 * If received value is not a string or it is an empty string, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - array
 */
/**
 * When received a value that is not a string, return an empty array
 * if it's a string call onSuccess function which returns an array of words from the string
 * @param {any} value
 * @param {function} onError
 * @param {function} onSuccess
 * @returns {Array}
 */
const transformStringToArray = (value, onError, onSuccess) => {
  if (!validateString(value)) {
    return onError();
  }
  return onSuccess(value);
};
export default transformStringToArray;
