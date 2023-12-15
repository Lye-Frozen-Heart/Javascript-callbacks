import onError from "./callbacks/onError.js";

import onSuccess from "./callbacks/onSuccess.js";

import transformStringToArray from "./transformStringToCollection.js";

console.log("Number: " + transformStringToArray(1, onError, onSuccess));

console.log("Array: " + transformStringToArray(["2", "4"], onError, onSuccess));

console.log("Bool: " + transformStringToArray(true, onError, onSuccess));

console.log("Empty String: " + transformStringToArray(" ", onError, onSuccess));

console.log(
  "String: " + transformStringToArray("Hola me llamo Alex", onError, onSuccess)
);
