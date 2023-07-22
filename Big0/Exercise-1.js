const memo = ["memo"];
const everyone = [
  "allen",
  "jessy",
  "roberts",
  "discipline",
  "memo",
  "mathew",
  "jersery",
];
const large = new Array(10000).fill("memo");
function findMemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[0] === "memo") {
      console.log("found memo");
    }
  }
  let t1 = performance.now();
  //   console.log(`function took   ${t0 - t1} milleseconds`);
}
findMemo(memo); // Big0 here is o(n) ======> linear time

