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
 * If received specified value is not a string or it is an empty string,
 *  then call onError callback otherwise, call onSuccess function
 * @param {any} value
 * @param {function} onError
 * @param {function} onSuccess
 * @returns {Array}
 */
const transformStringToArray = (value, onError, onSuccess) => {
  if (typeof value !== "string") return onError();
  return onSuccess(value);
};
export default transformStringToArray;
