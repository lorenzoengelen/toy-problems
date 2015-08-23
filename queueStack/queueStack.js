/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */

var Stack = function () {
  var storage = {};
  var top = 0;
  
  // add an item to the top of the stack
  this.push = function (value) {
    storage[top] = value;
    top += 1;
  };

  // remove an item from the top of the stack
  this.pop = function () {
    if (this.size() > 0) {
      var remove = storage[top - 1];
      delete storage[top - 1];
      top -= 1;
      return remove;
    }
  };

  // return the number of items in the stack
  this.size = function () {
    return top;
  };

  return this;
};

/**
  * Queue Class
  */
var Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function (value) {
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function () {
    var popped;
    while (inbox.size() > 0) {
      popped = inbox.pop();
      outbox.push(popped);
    }

    var result = outbox.pop();

    while (outbox.size() > 0) {
      popped = outbox.pop();
      inbox.push(popped);
    }

    return result;
  };

  // should return the number of items in the queue
  this.size = function () {
    return inbox.size();
  };
};
