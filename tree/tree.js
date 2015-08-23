/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function () {
  var obj = Object.create(treeMaker.methods);
  obj.root = null;

  return obj;
};

var makeNode = function (value) {
  return {
    value: value,
    children: []
  };
};

//methods go here!

treeMaker.methods = {};

treeMaker.methods.addChild = function (value) {
  var node = makeNode(value);

  if (this.isEmpty()) {
    this.root = node;
  } else {
    this.root.children.push(node);  
  }
};

treeMaker.methods.contains = function (value, node) {
  var start = (node === void 0) ? this.root : node;
  if (start.value === value) return true;

  var children = start.children;
  for (var i = 0; i < children.length; i += 1) {
    var child = children[i];
    if (this.contains(value, child)) return true;
  }
  return false;
};

treeMaker.methods.isEmpty = function () {
  return this.root === null;
};