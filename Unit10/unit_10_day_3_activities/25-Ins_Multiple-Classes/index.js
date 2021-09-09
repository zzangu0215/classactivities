// Import classes which will be used to run the app.
const Restaurant = require('./restaurant');
const Order = require('./order');
const Item = require('./item');

// Create a new Restaurant and an array of items using the classes.
const restaurant = new Restaurant("McJared's");
const items = [
  new Item('Burger', 5.99),
  new Item('Soda', 3.5),
  new Item('Chips', 2.0),
];

// Loop over items to create an array of orders from each item.
const orders = items.map((item) => new Order(item));

// Loop over orders to add each to the restaurant.
orders.forEach((order) => restaurant.takeOrder(order));

// Make the restaurant prepare all the orders.
restaurant.prepareOrders();
