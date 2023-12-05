/**
 * Define 'createUser' function and signature (JSDocs)
 *
 * input:
 *  - email: string
 *  - onError: function
 *  - onSuccess: function
 *
 * It will generate a random number in between 0 and 1
 * If random number is less than 0.5 or email is empty, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - string
 */
/**
 * Passed an email as a string generates a random number between zero and one,
 * if this number is less than 0.5 or email is empty then returns a function
 * validated string
 * @param {string} email
 * @param {function} onError
 * @param {function} onSuccess
 * @returns {string}
 */
const createUser = (email, onError, onSuccess) => {
  const randomNumber = Math.random().toFixed(1);
  if (email !== "" && randomNumber > 0.5) {
    return onSuccess(email);
  }
  return onError();
};
export default createUser;
