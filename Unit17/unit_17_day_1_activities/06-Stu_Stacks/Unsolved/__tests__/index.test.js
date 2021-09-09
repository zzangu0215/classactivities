const Stack = require("../index");

describe("Stack class", () => {
  test("can instantiate a new stack with an empty array", () => {
    const emptyStack = new Stack();
    expect(emptyStack).toEqual({ container: [] });
  });

  test("can instantiate a new stack with an array", () => {
    const stack = new Stack([1, 2, 3, 4]);
    expect(stack).toEqual({ container: [1, 2, 3, 4] });
  });

  test("can add a new element to the top of the stack", () => {
    const stack = new Stack([1, 2, 3, 4]);
    stack.addToStack(5);
    expect(stack).toEqual({ container: [1, 2, 3, 4, 5] });
  });

  test("can remove items from the top of the stack", () => {
    const stack = new Stack([1, 2, 3, 4]);
    const val = stack.removeFromStack();
    expect(val).toEqual(4);
    expect(stack).toEqual({ container: [1, 2, 3] });
  });
});
