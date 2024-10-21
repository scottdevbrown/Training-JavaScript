/* If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
  Sample I/O:
   Input:  [1, -4, 12, 0, -3, 29, -150]
   Output: 42
*/
const inputs =  [1, -4, 12, 0, -3, 29, -150]

const greaterThan = 0
const filterSum = (inputs, greaterThan) =>{
  return result = inputs.filter(input => input > greaterThan).reduce((pre, cur)=>pre+cur)  
}

console.log(filterSum(inputs, greaterThan))