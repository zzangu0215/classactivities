const countdown = (value) => {
  // base case to end the loop
  if (value <= 0) {
    return value;
  }

  // for all values more than 0, logs the value then calls the function with a
  // smaller argument
  console.log(value);
  // recursive call creates the loop
  return countdown(value - 1);
};

countdown(10);
