// function findTwoBoxes(array) {
//     items.forEach(item => {
//     console.log(item[0])
//      console.log(item[1]);
// });
// }
// findTwoBoxes(items)
// function anotherFunction() {
//   console.log("hello from another function");
// }

// function funChallenge(input) {
//   let a = 10;
//     a = 50 + 3;

//   for (let i = 0; i < input.length; i++) {
//       anotherFunction();
//     let stranger = true;
//     a++;
//   }
//     return a;
//     console.log(a)
// }

// funChallenge("70");

//BIG0 ---- 0(n) or 0(input.length)


// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // n(1)
  let b = 10; // n(1)
  let c = 50; // n(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // n(n)
    let y = i + 2; // n(n)
    let z = i + 3; // n(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // n(n)
    let q = j * 2; // n(n)
  }
  let whoAmI = "I don't know"; // n(1)
}