/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

var isInput = function (text) {
  return text === '(' ||
         text === '[' ||
         text === '{';
};

var isOutput = function (text) {
  return text === ')' ||
         text === ']' ||
         text === '}';
};

var map = {
  ')' : '(',
  ']' : '[',
  '}' : '{'
};

var balancedParens = function (input) {
  var stack = [];
  var split = input.split('');
  var len = split.length;

  for (var i = 0; i < len; i += 1) {
    var cur = split[i];
    if (isInput(cur)) {
      stack.push(cur);
    } else if (isOutput(cur)) {
      var popped = stack.pop();
      if (popped !== map[cur]) return false;
    }
  }

  return stack.length === 0;
};