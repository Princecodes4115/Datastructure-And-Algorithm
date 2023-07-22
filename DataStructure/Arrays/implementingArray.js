class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getData(index) {
    return this.data[index];
  }

  add(item) {
    // actually pushing
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  remove() {
    // actually popping
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete() {
    const item = this.data[index];
    this.shiftItems(index); // this function shifts data after
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const NewArray = new MyArray();
NewArray.add("hii"); // actually pushing
NewArray.add("hello");
NewArray.add("melody");
// NewArray.remove() // actually popping
// NewArray.remove();
NewArray.delete[2];
console.log(NewArray);





/* ############################################################## */


class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push("hi");
myArray.push("you");
myArray.push("!");
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push("are");
myArray.push("nice");
myArray.shiftItems(0);
console.log(myArray);