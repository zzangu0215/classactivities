const Letter = require('./Letter');

class Word {
  // TODO: implement constructor method that passes tests. Hint: What string method
  // can convert a word into an array of characters?
  constructor(letters) {
    var lettersArray = letters.split("");
    var letterObjectArray = [];

    for (var i=0; i<lettersArray.length; i++) {
      letterObjectArray.push(new Letter(lettersArray[i]));
    }
    this.letters = letterObjectArray;
  }
  
  // TODO: implement getSolution method that passes tests
  getSolution() {
    var letterObjectArray = this.letters;
    var lettersArray = [];

    for (var i=0; i<letterObjectArray.length; i++) {
      lettersArray.push(letterObjectArray[i].getSolution());
    }
    return lettersArray.join("");
  }

  // TODO: implement guessLetter method that passes tests. Hint: use the guess method
  // of each Letter object
  guessLetter(letterGuess) {
    var solution = this.getSolution();
    console.log(solution);

    for (var i=0; i<solution.length; i++) {
      if (letterGuess === solution[i]) return true;
      else return false;
    }
  }

  // TODO: implement guessedCorrectly method that passes tests. Hint: use the
  // visible property of each letter to determine if it has been guessed
  // correctly yet.

  // TODO: implement toString method that passes tests.
}

module.exports = Word;
