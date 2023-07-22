function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);




/*   **********************************************  */
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Merge the arrays while both have elements
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add any remaining elements from arr1
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add any remaining elements from arr2
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const merged = mergeSortedArrays(arr1, arr2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
