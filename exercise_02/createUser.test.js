import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

describe("Given function createUser", () => {
  const mockOnError = jest.fn();
  const mockOnSuccess = jest.fn();
  mockOnError.mockImplementation(() => {
    return "Error: user not created";
  });
  mockOnSuccess.mockImplementation((email) => {
    return `User with email: ${email} has been correctly created`;
  });
  describe("When function is called with an email as an empty string", () => {
    test("Then a string is returned", () => {
      // Arrange
      const inputEmptyString = "";
      // Act
      const result = createUser(inputEmptyString, mockOnError, mockOnSuccess);
      // Assert

      expect(result).toEqual("Error: user not created");
      expect(mockOnError).toHaveBeenCalledTimes(1);
    });
  });
  describe("When function is called with an email as a string and random number is less than 0.5", () => {
    test("Then a string is returned with the email for this case", () => {
      // Arrange
      const inputString = "email@gmail.com";

      // Act
      const randomSpy = jest.spyOn(Math, "random");
      randomSpy.mockReturnValueOnce(0.8);
      const result = createUser(inputString, mockOnError, mockOnSuccess);

      // Assert
      expect(result).toBe(
        "User with email: email@gmail.com has been correctly created"
      );
      expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    });
  });
});
