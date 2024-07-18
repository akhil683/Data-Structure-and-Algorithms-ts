//google , udemy, youtube
//youtube, udemy, google

// We can build Stack with -
// LinkedList - dynamic
// Array -- Cache locality, faster when accessing item in memory
// because they're right next to each other
// while linkedlist is scattered all over the memory

// STACK WITH ARRAY
class Stack {
  construtor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    this.array.pop();
    return this;
  }
}
// STACK WITH LINKEDLIST
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  construtor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    console.log(this.top);
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //const holdingPointer = this.top
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("youtube");
myStack.push("udemy");
myStack.peek();
