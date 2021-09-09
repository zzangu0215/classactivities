setTimeout(() => {
  document.querySelector(".btn").classList.remove("display-none");
}, 8000);

// function to block the stack for x number of milliseconds
// const pause = (milliSeconds) => {
//   // get the current time
//   const startTime = new Date().getTime();
//   // block stack until time's up
//   while (new Date().getTime() < startTime + milliSeconds);
// };

// pause(8000);
