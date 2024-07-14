// CHAT GPT LINKED LIST
class LinkNode {
  value: number;
  next: LinkNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedLists {
  head: LinkNode | null;
  tail: LinkNode | null;
  length: number;

  constructor(value: number) {
    this.head = new LinkNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: number): void {
    const newNode = new LinkNode(value);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value: number): void {
    const newNode = new LinkNode(value);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

const WhoseLinkedList = new LinkedLists(10);
