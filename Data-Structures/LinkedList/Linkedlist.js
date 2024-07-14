// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class DoublyLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
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
      next: null, // pointer to next node
      prev: null, //Doubly LinkedList
    };
    this.tail = this.head; // here, head is a tail becuz we have only 1 item -> 10
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode; // here tail.next is still the previous node
    this.tail = newNode; // now we changed the tail to newNode
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
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
    return array;
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    this.length++;
    return this.printList();
  }
  remove(index) {
    if (index >= this.length) {
      this.head = this.head.next;
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    unwantedNode.prev = leader;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  reverse() {
    if (!this.head.next) return this.head;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(7);
myLinkedList.prepend(11);
myLinkedList.insert(2, 9);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
