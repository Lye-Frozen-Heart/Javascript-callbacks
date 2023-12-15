import validateString from "./validateString.js";
describe("Given function validateString", () => {
  test("Undefined value should return false", () => {
    expect(validateString(undefined)).toBe(false);
  }),
    test("Number value should return false", () => {
      expect(validateString(42)).toBe(false);
    }),
    test("Array value should return false", () => {
      expect(validateString([1, 2, 3])).toBe(false);
    }),
    test("Boolean value should return false", () => {
      expect(validateString(true)).toBe(false);
    }),
    test("Object value should return false", () => {
      expect(validateString({ key: "value" })).toBe(false);
    }),
    test("Empty string should return false", () => {
      expect(validateString("")).toBe(false);
    }),
    test("Fulfilled string should return true", () => {
      expect(validateString("Hello, World!")).toBe(true);
    });
});
