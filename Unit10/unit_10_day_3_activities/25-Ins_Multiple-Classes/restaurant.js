class Restaurant {
  constructor(name) {
    this.name = name;
    this.orders = [];
    this.revenue = 0;
  }

  // Method increases the restaurant's revenue by the price of the order, then
  // adds the order to the restaurant's array of orders.
  takeOrder(order) {
    this.revenue += order.item.price;
    this.orders.push(order);
    console.log(`Added #${order.id} to the queue`);
    this.printRevenue();
  }

  printRevenue() {
    console.log(`${this.name} has made ${this.revenue} so far!`);
  }

  // Removes an order from the beginning of orders each second until there are
  // no more orders.
  prepareOrders() {
    const prepareInterval = setInterval(() => {
      if (this.orders.length === 0) {
        console.log('Finished cooking all orders!');

        clearInterval(prepareInterval);
      } else {
        const order = this.orders.shift();

        console.log(`#${order.id} has been prepared.`);
      }
    }, 1000);
  }
}

module.exports = Restaurant;
