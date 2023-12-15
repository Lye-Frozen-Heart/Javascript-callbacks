import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import transformStringToCollection from "./transformStringToCollection.js";

describe("Given function transformStringToCollection", () => {
  const mockOnError = jest.fn();
  const mockOnSuccess = jest.fn();
  mockOnError.mockImplementation(() => {
    return [];
  });
  mockOnSuccess.mockImplementation((value) => {
    return value.split(" ");
  });
  describe("When function is called with a value which type is a number", () => {
    test("Then an empty array is returned", () => {
      // Arrange
      const inputNumber = 42;
      // Act
      const result = transformStringToCollection(
        inputNumber,
        mockOnError,
        mockOnSuccess
      );
      // Assert
      expect(result).toEqual([]);
      expect(mockOnError).toHaveBeenCalledTimes(1);
    });
  }),
    describe("When function is called with a value which type is a collection", () => {
      test("Then an empty array is returned", () => {
        // Arrange
        const inputCollection = [42, 23];
        // Act
        const result = transformStringToCollection(
          inputCollection,
          mockOnError,
          mockOnSuccess
        );
        // Assert
        expect(result).toEqual([]);
        expect(mockOnError).toHaveBeenCalledTimes(1);
      });
    }),
    describe("When function is called with a value which type is a boolean", () => {
      test("Then an empty array is returned", () => {
        // Arrange
        const inputBoolean = true;
        // Act
        const result = transformStringToCollection(
          inputBoolean,
          mockOnError,
          mockOnSuccess
        );
        // Assert
        expect(result).toEqual([]);
        expect(mockOnError).toHaveBeenCalledTimes(1);
      });
    }),
    describe("When function is called with an empty string value", () => {
      test("Then an array is returned", () => {
        // Arrange
        const inputEmptyString = " ";
        // Act
        const result = transformStringToCollection(
          inputEmptyString,
          mockOnError,
          mockOnSuccess
        );
        // Assert
        expect(result).toEqual([]);
        expect(mockOnError).toHaveBeenCalledTimes(1);
      });
    }),
    describe("When function is called with a string value", () => {
      test("Then an array is returned", () => {
        // Arrange
        const inputEmptyString = "Hola me llamo Alex";
        // Act
        const result = transformStringToCollection(
          inputEmptyString,
          mockOnError,
          mockOnSuccess
        );
        // Assert
        expect(result).toEqual(["Hola", "me", "llamo", "Alex"]);
        expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      });
    });
});
