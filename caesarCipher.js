function caesarCipher(str, key) {
  return str.split("").map(char => shiftLetter(char, key)).join("");

  function shiftLetter(char, key) {
    if (/[a-zA-Z]/.test(char)) {
      const alphabetStart = char >= "a" ? "a".charCodeAt(0) : "A".charCodeAt(0);
      const alphabetSize = 26;
  
      return String.fromCharCode(
        ((char.charCodeAt(0) - alphabetStart + key) % alphabetSize) + alphabetStart
      );
    }
    return char;
  }
}

module.exports = caesarCipher;
