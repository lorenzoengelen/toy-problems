/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.
 */

/**
  * Stack Class
  */
var Stack = function () {
  var storage = {};
  var minStorage = {};
  var top = 0;
  var minTop = 0;

  // add an item to the top of the stack
  this.push = function (value) {
    storage[top] = value;
    top += 1;

    if (minTop === 0 || (minTop > 0 && minStorage[minTop - 1] >= value)) {
      minStorage[minTop] = value;
      minTop += 1;
    }
  };

  // remove an item from the top of the stack
  this.pop = function (){
    if (this.size() > 0) {
      var remove = storage[top - 1];
      delete storage[top - 1];
      top -= 1;

      if (minStorage[minTop - 1] === remove) {
        delete minStorage[minTop - 1];
        minTop -= 1;
      }

      return remove;
    }
  };

  // return the number of items in the stack
  this.size = function () {
    return top;
  };

  this.min = function () {
    return minStorage[minTop - 1];
  };

  return this;
};

