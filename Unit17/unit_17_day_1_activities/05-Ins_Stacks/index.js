class Stack {
  // default value allows stack to initialize without an argument
  constructor(container = []) {
    this.container = container;
  }

  // adds an element to the top of the stack
  addToStack(el) {
    return this.container.push(el);
  }

  // removes an element from the top of the stack. The values of a stack are
  // accessed using Last In, First Out (LIFO).
  removeFromStack() {
    return this.container.pop();
  }
}

module.exports = Stack;
