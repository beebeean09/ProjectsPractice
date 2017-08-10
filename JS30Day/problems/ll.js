class Link {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    let current = this.head;
    let newNode = new Link(val);

    if (!current) {
      this.head = newNode;
      return newNode;
    }
    while (current.next) {
      current = current.next;
    }
    console.log('outside');
    current.next = newNode;
    return newNode;
  }

  reverse() {
    let previous = null;
    let current = this.head;
    let nextNode;

    while (current) {
      nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    this.head = previous;
  }
}

let linkedList = new LinkedList;
linkedList.add(2);
linkedList.add(3);
console.log(linkedList);
// linkedList.reverse();
// console.log(linkedList);
