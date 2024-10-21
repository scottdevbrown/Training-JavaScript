/* If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
  Sample I/O:
   Input:  [1, -4, 12, 0, -3, 29, -150]
   Output: 42
*/
const input = [1, -4, 12, 0, -3, 29, -150]
const filterSum=(inputs) => {
  return inputs.filter(input => input > 0).reduce((total, value) => total + value);
}
console.log(filterSum(input));