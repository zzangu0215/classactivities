const Letter = require("../lib/Letter");

describe("Letter class", () => {
  describe("constructor", () => {
    it("Initializes char property", () => {
      const letter = new Letter("a");
      expect(letter.char).toBe("a");
    });

    it("visible is true when char parameter is not alphanumeric", () => {
      expect(new Letter("?").visible).toBe(true);
    });

    it("visible is false when char parameter is alphanumeric", () => {
      expect(new Letter("a").visible).toBe(false);
    });
  });

  describe("toString", () => {
    it("toString returns _ when visible = false", () => {
      expect(new Letter("a").toString()).toBe("_");
    });

    it("toString returns char when visible = true", () => {
      expect(new Letter("?").toString()).toBe("?");
    });
  });

  describe("guess", () => {
    it("returns false when guessed character != char", () => {
      expect(new Letter("j").guess("l")).toBe(false);
    });

    it("returns true when guessed character = char", () => {
      expect(new Letter("j").guess("j")).toBe(true);
    });

    it("updates visible property when guessed char is correct", () => {
      const letter = new Letter("b");
      letter.guess("b");
      expect(letter.visible).toBe(true);
    });

    it("is not case sensitive", () => {
      const letter = new Letter("B");
      letter.guess("b");
      expect(letter.visible).toBe(true);
    });
  });

  describe("getSolution", () => {
    it("returns char", () => {
      const solution = new Letter("l").getSolution();
      expect(solution).toBe("l");
    });
  });
});
