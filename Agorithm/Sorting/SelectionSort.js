const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let minIndex = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        //update minimum if current is lower that what we had previously
        minIndex = j;
      }
    }
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}
selectionSort(numbers);
console.log(numbers);
