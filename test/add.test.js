const add = require("./add.test");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds 0 + 0 to equal 0", () => {
  expect(add(0, 0)).toBe(0);
});

test("adds -5 + -10 to equal -15", () => {
  expect(add(-5, -10)).toBe(-15);
});

test("throws error if is string", () => {
  expect(() => add("2", 3)).toThrow("Both inputs must be numbers");
});

test("throws error if  is undefined", () => {
  expect(() => add(undefined, 3)).toThrow("Both inputs must be numbers");
});

test("throws error if is null", () => {
  expect(() => add(null, 1)).toThrow("Both inputs must be numbers");
});

test("adds big numbers correctly", () => {
  expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
});
