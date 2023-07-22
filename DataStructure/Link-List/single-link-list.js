// add a method prepend() to the linked list that adds a node to the beginning of the list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    console.log(newNode);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // prepend(value) {
  //   this.head = { value, next: this.head };
  //   this.length++;
  //   console.log(this.head)
  //   return this;
  // }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    // Check if the index is out of bounds, if so, append the value instead
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }
    // Create a new node with the given value
    const newNode = new Node(value);
    // Find the node at the specified index (index-1) to insert after
    const leader = this.traverseToIndex(index - 1);
    // Save the reference to the node after the leader
    const holdingPointer = leader.next;
    // Update the references to insert the new node
    leader.next = newNode;
    newNode.next = holdingPointer;
    // Increase the length of the linked list
    this.length++;
    // Return the updated linked list by calling the printList() method
    return this.printList();
  }
  traverseToIndex(index) {
    // Check if the index is valid
    let counter = 0;
    let currentNode = this.head;
    // Traverse the linked list until the specified index is reached
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    // Return the node at the specified index
    return currentNode;
  }

  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(34);
myLinkedList.prepend(30);
myLinkedList.insert(1, 88);
myLinkedList.insert(39, 100);
myLinkedList.remove(2);
myLinkedList.printList();
