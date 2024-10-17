/* Calculate the mean and median values of the number elements from the input array.
  Sample I/O:
   Input:  [12, 46, 32, 64]
   Output: { mean: 38.5, median: 39 }
*/
const input = [12, 46, 32, 64];
const totalValue=(inputs) => {
  return inputs.reduce((total, value) => total + value);
}
var meanValue = totalValue(input)/input.length;
var medianValue = Math.ceil(meanValue);
console.log(meanValue, medianValue);