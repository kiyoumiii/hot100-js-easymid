class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(val) {
      this.items.push(val); // O(1)
    }
  
    dequeue() {
      if (this.isEmpty()) return undefined;
      return this.items.shift(); // O(n) ❌（因为数组要移动元素）
    }
  
    peek() {
      if (this.isEmpty()) return undefined;
      return this.items[0]; // O(1)
    }
  
    isEmpty() {
      return this.items.length === 0; // O(1)
    }
  
    size() {
      return this.items.length; // O(1)
    }
  }