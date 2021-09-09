function Algo() {}

Algo.prototype.reverse = function (str) {
  return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function (str) {
  return str === this.reverse(str);
};

Algo.prototype.capitalize = function (str) {
  return str
  .split(" ")
  .map(word => word[0].toUpperCase() + word.substr(1))
  .join(" ");

};

module.exports = Algo;
