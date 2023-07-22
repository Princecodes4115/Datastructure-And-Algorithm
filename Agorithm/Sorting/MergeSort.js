const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// The `mergeSort()` function takes an array as input and returns the sorted array.
// The function works by recursively sorting the left and right halves of the array.
function mergeSort(array) {
  // If the array is empty or has only one element, it is already sorted.
  if (array.length <= 1) {
    return array;
  }

  // Calculate the middle index of the array.
  const mid = Math.floor(array.length / 2);

  // Recursively sort the left and right halves of the array.
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  // Merge the sorted left and right halves of the array.
  return merge(left, right);
}

// The `merge()` function takes two sorted arrays as input and returns the merged sorted array.
// The function works by iterating through the two sorted arrays, adding the smaller element from each array to the merged array.
function merge(left, right) {
  // Create a new array to store the merged sorted elements.
  const merged = [];

  // Declare two indexes to iterate through the left and right arrays.
  let i = 0;
  let j = 0;

  // Iterate through the left and right arrays, adding the smaller element from each array to the merged array.
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Add the remaining elements from the left and right arrays to the merged array.
  merged.push(...left.slice(i));
  merged.push(...right.slice(j));

  // Return the merged sorted array.
  return merged;
}

// Sort the array using merge sort.
mergeSort(numbers);

// Print the sorted array to the console.
console.log(numbers);
