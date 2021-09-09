const durations = [400, 800, 1100, 1500];

// Try setting maxDuration to a smaller value to test if your promise rejects
// correctly.
const maxDuration = 9999;

const wait = (timeout) =>
  new Promise((resolve, reject) => {
    if (timeout > maxDuration) {
      const error = new Error("This timeout is too long.");
      // TODO: reject the promise with the error
      return;
    }
    setTimeout(() => {
      // TODO: Resolve the promise with the string "Timeout for #### ms ended."
    }, timeout);
  });

const promises = durations.map((duration) => wait(duration));

console.log("Promises array before the timeouts have finished: ", promises);

// TODO: Use Promise.all() to capture when the array of promises has been
// resolved or if any of them were rejected
