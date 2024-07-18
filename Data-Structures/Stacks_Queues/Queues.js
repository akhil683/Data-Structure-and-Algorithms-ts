// they can be built with -
// Array
// LinkedList - (preffered)
// linkedlist is preffered because if we want to remove first item
// from queue built with array. then we have to
// shift the indexes of other item in array. which is 0(n)
// while in LinkedList this will be 0(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    // const holdingPointer = this.first; // if we dont' want item to delete from memory
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue("akhil");
myQueue.enqueue("Shivansh");
myQueue.enqueue("Rishu");
myQueue.dequeue();
myQueue.peek();
