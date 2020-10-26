const assert = require("assert");

/**
 * BONUS CHALLENGE:
 * Implement your own version or Array.map()
 * The function should take an array: "arr" and a function: "f" as its inputs.
 * The function should output the same list with the function applied to each element individually
 */

const my_map = (arr, f) => {

};

// SOLUTION:
// const my_map = (l, f) => {
//   const [head, ...tail] = l;
//   if (l.length == 0) {
//     return []
//   }
//   return [].concat(f(head),  my_map(tail, f))
// }

console.log(my_map([1,2,3], e => e*2))
// should output [2,4,6]