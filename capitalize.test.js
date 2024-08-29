const capitalize = require("./capitalize.js");

test("only the first character is a capital letter", () => {
  expect(capitalize("mIxEdCaSe")).toBe("Mixedcase");
});
