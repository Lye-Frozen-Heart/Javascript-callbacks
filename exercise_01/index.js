import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import transformStringToArray from "./transformStringToCollection.js";
//test with value as number and log result
console.log("Number: " + transformStringToArray(1, onError, onSuccess));
//test with value as array and log result
console.log("Array: " + transformStringToArray(["2", "4"], onError, onSuccess));
//test with value as boolean and log result
console.log("Bool: " + transformStringToArray(true, onError, onSuccess));
//test with value as empty string and log result
console.log("Empty String: " + transformStringToArray(" ", onError, onSuccess));
//test with value as string and log result
console.log(
  "String: " + transformStringToArray("Hola me llamo Alex", onError, onSuccess),
);
