/*
Write code that enhances all arrays such that you can call the array.groupBy(fn) 
method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each 
value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. 
Any order of keys is acceptable.
*/

Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, el) => {
    const key = fn(el);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(el);
    return acc;
  }, {});
};

// Array.prototype.groupBy = function (fn) {
//   const result = {};
//   this.forEach((el) => {
//     const key = fn(el);
//     if (!result[key]) {
//       result[key] = [];
//     }
//     result[key].push(el);
//   });

//   return result;
// };
