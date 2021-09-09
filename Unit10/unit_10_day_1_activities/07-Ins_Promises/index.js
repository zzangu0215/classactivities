// Promise example using a real-life promise

// The real-life promise in this scenario is a child asking his parents for a
// Nintendo Switch

const choresDone = true;

// Promise
const willGetSwitch = new Promise((resolve, reject) => {
  // Check for a desireable outcome, if so resolve the promise
  if (choresDone) {
    const reward = {
      name: 'Nintendo Switch',
      desired: true,
    };
    resolve(reward);

    // Otherwise reject the promise
  } else {
    const issue = new Error('Child did not finish chores as promised');
    reject(issue);
  }
});

// Another promise to call only if we get the reward
const playGames = (reward) => {
  const message = `I am playing games on my new ${reward.name}`;
  return Promise.resolve(message);
};

willGetSwitch
  .then(playGames)
  .then((resolved) => console.log(resolved))
  .catch((err) => console.error(err));

// Example without promises (using callbacks instead)
// const willGetSwitchCb = (cb) => {
//   if (choresDone) {
//     const reward = {
//       name: 'Nintendo Switch',
//       desired: true,
//     };
//     cb(null, reward);
//   } else {
//     const error = new Error('Child did not finish chores as promised');
//     cb(error);
//   }
// };

// const playGamesCb = (reward, cb) => {
//   cb(`I am playing games on my new ${reward.name}`);
// };

// willGetSwitchCb((err, reward) => {
//   if (err) {
//     console.error(err);
//   } else {
//     // Nesting another callback.
//     playGamesCb(reward, (message) => {
//       console.log(message);
//     });
//   }
// });
