// without rest
function addTwo(x, y) {
  return x + y;
}
console.log("\naddTwo ==================\n");
console.log(addTwo(1, 2, 3, 4, 5)); // => 3

// 1. rest
function addAll(...nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

console.log("\n1. addAll ===============\n");
console.log(addAll(1)); // => 1
console.log(addAll(3, 3)); // => 6
console.log(addAll(1, 1, 4, 5)); // => 11

// 2.
function howManyArgs(...args) {
  return `You passed ${args.length} arguments.`; // point out the template literal
}

console.log("\n2. howManyArgs ==========\n");
console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// 3. spread
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons


console.log("\n3. spread ===============\n");
console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]
