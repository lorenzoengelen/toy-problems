/**
 * Given an arbitrary input array, write a function that reverses the contents
 * of the array (ie, without modifying the original array.)
 * Don't use the native Array.prototype.reverse() method.
 *
 * Extra Credit: Reverse in-place (don't use an extra array).
 *
 *
 * Here's a sample input to get you going:
 *
 *   reverseArray([1, 8, 39, null, 2, 9, 'bob'])[0] // should equal => 'bob'
 */

var reverseArray = function (array) {
  var result = [];
  while (array.length > 0) {
    result.push(array.pop());
  }
  return result;
};

var reverseArray = function (array) {
  var start = 0;
  var end = array.length - 1;

  while (start < end) {
    swap(array, start, end);
    start += 1;
    end -= 1;
  }
  return array;
};

var swap = function (array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};