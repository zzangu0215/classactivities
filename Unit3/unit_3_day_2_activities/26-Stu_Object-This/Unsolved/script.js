// TODO: What will "this" refer to in the following statement?
// "this"
console.log(this);

// TODO: What will "this" refer to in the following statement?
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// TODO: What will happen when the ageTenYears method is called? What will
// "this" refer to?
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// TODO: What will calling the investmentGrowth method print in the console?
// What will "this" refer to in the method?
// It will print 5750
// "this" refers to the investor.investment object
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// TODO: Call the helloThis function to check results.
helloThis()

// TODO: Call the methods from the child and investor objects to check results.
child.ageTenYears();
investor.investment.investmentGrowth();

var array = [0.95, 5.64, 10.45, 11, 23, 23, 22, 1, 0, 5];
var selection = Math.floor(Math.random() * array.length);
console.log(selection);