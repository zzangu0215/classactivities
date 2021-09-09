// create the Queue class with two methods to remove and add an element
class Queue {
  constructor(container = []) {
    this.container = container;
  }

  addToQueue(elem) {
    return this.container.push(elem);
  }

  removeFromQueue() {
    return this.container.shift();
  }
}

module.exports = Queue;
