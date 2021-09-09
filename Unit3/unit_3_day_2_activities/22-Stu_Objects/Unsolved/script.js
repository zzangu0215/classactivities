//WRITE YOUR CODE BELOW

// Create a customerOrder object
// Give the objects 3 pro
var customerOrder = {
    drink: 'Raspberry Tea',
    "num Sugars": 3,
    isReady: true,
};

console.log(customerOrder.drink);
console.log(customerOrder["num Sugars"]);

if (customerOrder.isReady) {
    console.log('Ready for pick-up');
} else {
    console.log('Still in order queue');
}

for (var property in customerOrder) {
    console.log(`${property}: ${customerOrder[property]}`);
}