const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {
  arr;
  
  constructor(newStack)
  {
    this.arr = [];
  }
 
  push(el) {
    this.arr.push(el);
    // remove line with error and write your code here
  }

  pop(el) {
    if (this.arr.length == 0)
    {
      return undefined;
    }
    else{
      return this.arr.pop(el);
    }
    // remove line with error and write your code here
  }

  peek() {
   return this.arr[this.arr.length - 1];
    // remove line with error and write your code here
  }
};
