const caesarCipher = require("./caesarCipher.js");

test("abc with the key of 3 becomes def", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("upper and lower cases and punctuation are unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
