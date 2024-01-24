QUESTION://2635. Apply Transform Over Each Element in Array
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

ANS:
let map = function(arr, fn) {
  const res = [];

  for(const i in arr){
      res.push(fn(arr[i], Number(i)));
  }
  return res;
};


ANS:
let map = function(arr, fn) {
  return arr.map(fn);
};