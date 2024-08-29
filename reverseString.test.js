const reverseString = require("./reverseString.js");

test("entire string gets reversed", () => {
  expect(reverseString("Hello Odin!")).toBe("!nidO olleH");
});
