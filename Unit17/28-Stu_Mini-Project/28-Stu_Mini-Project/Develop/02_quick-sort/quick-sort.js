// Create our input data
const unsortedInputArray = [];
// seed data in unsortedInputArray
for (let i = 0; i < 2000; i += 1) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create quick sort function
const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const left = [];
  const right = [];

  const pivot = array.splice(Math.floor(Math.random() * array.length), 1); //index

  for (let i = 0; i < array.length; i++) {
    if (array[i] > pivot) {
      right.push(array[i]);
    } else if (array[i] <= pivot) {
      left.push(array[i]);
    }
  }

  const sortedArray = quickSort(left).concat(pivot, quickSort(right));

  return sortedArray;
};

const sorted = quickSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
