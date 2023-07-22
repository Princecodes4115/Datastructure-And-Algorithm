const everyone = [
  "allen",
  "jessy",
  "roberts",
  "discipline",
  "nemo",
  "mathew",
  "jersery",
];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[0] === "nemo") {
      console.log("found nemo");
    }
  }
}

const findNemo2 = (array) => {
  array.forEach((element) => {
    if (element === "nemo") {
      console.log("found nemo");
    }
  });
};

const findNemo3 = (array) => {
  for (let element of array) {
    if (element === "nemo") {
      console.log("found nemo");
    }
  }
};

findNemo(everyone);
findNemo2(everyone);
findNemo3(everyone);
