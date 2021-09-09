// TODO: Complete the 'counter' function below.
function counter() {
  let result = 0;

  return {
    increment() {
      return (result += 1);
    },
  };
}

module.exports = counter;
