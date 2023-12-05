import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

describe("Given function createUser", () => {
  describe("When function is called with an email as an empty string", () => {
    test("Then a string is returned", () => {
      // Arrange
      const inputEmptyString = "";
      // Act
      const result = createUser(inputEmptyString, onError, onSuccess);
      // Assert
      expect(result).toEqual("Error: user not created");
    });
  });
});

describe("Given function createUser", () => {
  describe("When function is called with an email as an empty string", () => {
    test("Then a string is returned for success case", () => {
      // Arrange
      const inputString = "email@gmail.com";

      // Act
      const result = createUser(inputString, onError, onSuccess);

      // Assert
      expect(result).toEqual(
        `User with email: ${inputString} has been correctly created` ||
          "Error: user not created",
      );
    });
  });
});
