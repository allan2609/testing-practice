const calculator = require("./calculator.js");

test("adding works", () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test("subtracting works", () => {
  expect(calculator.subtract(3, 5)).toBe(-2);
});

test("multiplication works", () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test("division works", () => {
  expect(calculator.divide(30, 5)).toBe(6);
});
