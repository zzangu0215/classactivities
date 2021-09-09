// 1) Where is carNoise stored?
// carNoise is stored in the global execution context
const carNoise = "Honk";
// 2) Where is goFast stored?
// goFast is stored in the global execution context
const goFast = (speed) => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Once the goFast execution context is created, 80 is assigned to speed.

  // 5) Where is makeNoise stored?
  // makeNoise is stored in the local execution context in the goFast execution context.
  const makeNoise = (sound) => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  };

  // 6) What happens in the following statement?
  // Calling makeNoise
  makeNoise(carNoise);
};

// 3) What happens in the following statement?
// The confirm is a Web API, once resolved, the confirm is added to call stack to be processed,
// calling goFast if the confirm is true, then places it on the call stack which creates a new function
if (window.confirm("Do you want to go fast?")) {
  goFast(80);
}
