const Algo = require('../algo');

describe('Algo', () => {
  describe('reverse', () => {
    // TODO: Write a test for the `reverse` method that should take a string as
    // an argument and return a new reversed version of the string
    it("should return a new reversed version of the string", () => {
      const algo = new Algo();
      const result = algo.reverse("hello");

      expect(result).toEqual("olleh");
    });
  });

  describe('isPalindrome', () => {
    // TODO: Write a test for the `isPalindrome` method that should take a
    // string as an argument and return the boolean `true` if the provided
    // string is a palindrome.
    it("should return the boolean 'true' if the provided string is a palindrome", () => {
      const palindrome = "tenet";

      const algo = new Algo();

      const result = algo.isPalindrome(palindrome);

      expect(result).toEqual(true);
    });

    it("should return the boolean 'false' if the provided string is not a palindrome", () => {
      const notPalindrome = "taco";

      const algo = new Algo();

      const result = algo.isPalindrome(notPalindrome);

      expect(result).toEqual(false);
    });
  });

  describe('capitalize', () => {
    // TODO: Write a test for the `capitalize` method that should take a string
    // as an argument and return a new string with the first letter of each word
    // capitalized
    it("should return a new string with the first letter of each word capitalized", () => {
      const capitalized = "tacos are delicious";
      const algo = new Algo();

      const result = algo.capitalize(capitalized);

      expect(result).toEqual("Tacos Are Delicious");
    });
  });
});
