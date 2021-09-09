// The Letter Class is responsible for displaying either an underscore or the
// underlying character for each letter in the word
class Letter {
  // TODO: create a constructor method
  constructor(char) {
    this.char = char;
    var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

    if (iChars.includes(char)) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  // TODO: create a toString method
  toString() {
    if (this.visible === false) return "_";
    else return this.char;
  }

  // TODO: create a guess method
  guess(guessed) {
    if (this.char.toLowerCase() == guessed.toLowerCase()) {
      this.visible = true;
      return true;
    }
    else {
      this.visible = false;
      return false;
    }
  }

  // TODO: create a getSolution method
  getSolution() {
    return this.char;
  }

}

module.exports = Letter;
