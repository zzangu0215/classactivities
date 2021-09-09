const Queue = require('../index');

describe('Queue class', () => {
  test('Can instantiate a new queue', () => {
    const emptyQueue = new Queue();
    expect(emptyQueue).toEqual({ container: [] });
  });
  
  test('Can instantiate a new queue with an array', () => {
    const queue = new Queue([1, 2, 3, 4]);
    expect(queue).toEqual({ container: [1, 2, 3, 4] });
  });
  
  test('Can add a new item at the end of the queue', () => {
    const queue = new Queue([1, 2, 3, 4]);
    queue.addToQueue(5);
    expect(queue).toEqual({ container: [1, 2, 3, 4, 5] });
  });
  
  test('Can remove an item from the beginning of the queue', () => {
    const queue = new Queue([1, 2, 3, 4]);
    const val = queue.removeFromQueue();
    expect(queue).toEqual({ container: [2, 3, 4] });
    expect(val).toBe(1);
  });
});
