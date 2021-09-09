// WRITE YOUR CODE HERE
var names = ['Sam', 'Jun', 'John'];
var isChanged = false;

console.log('Number of Students: ' + names.length);

console.log('Welcome to the class ' + names[0]);
console.log('Welcome to the class ' + names[1]);
console.log('Welcome to the class ' + names[2]);

names[0] = 'Alex';
isChanged = true;

if (isChanged) {
    console.log(names[0] + ' is in class');
}