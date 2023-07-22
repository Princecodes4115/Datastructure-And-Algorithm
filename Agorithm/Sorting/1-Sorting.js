const letters = ["d", "c", "a", "b", "e"];
const numbers = [1, 44, 34, 67, 7, 9, 60];

console.log(letters.sort());
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);

const spanish = ["english", "álegence", "book", "talium"];
console.log(
  spanish.sort(function (a, b) {
    return a.localeCompare(b);
  })
);
