/**
  Implement your own version or Array.forEach()
  The function should take as input:
    an array: arr 
    a function: f
  The function call f on each element sequentially
  Example:
    myForEach([1, 2, 3], v => console.log(v))
    ->
      1
      2
      3
 */

      const myForEach = (arr, f) => {
        for (let i = 0; i < arr.length; i++)
        {
          f(arr[i]);
        }
      }
      
      module.exports = myForEach
      