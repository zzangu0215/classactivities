const Store = require('./store');
const Toy = require('./toy');

const toys = [
  new Toy('Action Figure', 14.99, 5),
  new Toy('Rare Toy', 17.99, 1),
];

const store = new Store("Big Al's Toy Barn", toys);

store.welcome();
store.processProductSale('Action Figure');
store.processProductSale('Action Figure');
store.processProductSale('Rare Toy');
store.processProductSale('Action Figure');

store.processProductSale('Rare Toy'); // <= Should be out of stock

store.replenishStock('Rare Toy', 2); // <= Should be restocked
store.processProductSale('Rare Toy');

store.printRevenue(); // <= Should be 80.95
