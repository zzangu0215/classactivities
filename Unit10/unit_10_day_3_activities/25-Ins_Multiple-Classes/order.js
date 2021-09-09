// The Order class represents a single order from a customer. An order has
// exactly one item and a "unique" id.
class Order {
  constructor(item) {
    this.item = item;

    // Create a semi-unique id for this example.
    this.id = Math.floor(Math.random() * 99) + 1;
  }
}

module.exports = Order;
