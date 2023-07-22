const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, low, high) {
  if (low < high) {
    // Choose the pivot element.
    const pivot = array[Math.floor((low + high) / 2)];

    // Partition the array around the pivot element.
    const i = partition(array, low, high, pivot);

    // Recursively sort the left and right subarrays.
    quickSort(array, low, i - 1);
    quickSort(array, i + 1, high);
  }
}

function partition(array, low, high, pivot) {
  // Initialize the indexes of the smaller and larger elements.
  let smaller = low;
  let larger = high;

  // Iterate through the array, swapping elements that are smaller than the pivot with elements that are larger than the pivot.
  while (smaller < larger) {
    while (array[smaller] < pivot) {
      smaller++;
    }

    while (array[larger] > pivot) {
      larger--;
    }

    // If the indexes have not crossed, swap the elements at the smaller and larger indexes.
    if (smaller < larger) {
      const temp = array[smaller];
      array[smaller] = array[larger];
      array[larger] = temp;
    }
  }

  // Return the index of the pivot element.
  return smaller;
}

// Sort the array using quick sort.
quickSort(numbers, 0, numbers.length - 1);

// Print the sorted array to the console.
console.log(numbers);
