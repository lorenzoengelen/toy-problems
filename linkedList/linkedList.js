/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 * 
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.addToTail(4);
// list.contains(4);  //yields 'true';
// list.removeHead();
// list.tail;        //yields 'null';

var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function (value) {
  var node = this.makeNode(value);
  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function () {
  if (!this.isEmpty()) {
    var head = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    head.next = null;
    return head;
  }
};

LinkedList.prototype.contains = function (value, node) {
  var start = (node === void 0) ? this.head : node;
  while (start) {
    if (start.value === value) return true;
    start = start.next;
  }
  return false;
};

LinkedList.prototype.isEmpty = function () {
  return this.head === null && this.tail === null;
};

LinkedList.prototype.makeNode = function (value) {
  return {
    value: value,
    next: null
  };
};
