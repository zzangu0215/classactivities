// TODO: Create a constructor function called 'Developer' that takes in 'name'
// and 'tech'

// TODO: Include a method called 'introduction()' that introduces the Developer
// with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object
function Developer(name, tech){
  this.name = name;
  this.tech = tech;
  this.introduction = function(){
      console.log(`hello my name is ${this.name} and my tech is ${this.tech}`)
  }
}
const name= process.argv[2];
const tech = process.argv[3];
const myDev = new Developer(name, tech);
myDev.introduction()