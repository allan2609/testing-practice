function capitalize(str) {
  if (!str) return "no string provided";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
module.exports = capitalize;
