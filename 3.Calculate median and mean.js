/* Calculate the mean and median values of the number elements from the input array.
  Sample I/O:
   Input:  [12, 46, 32, 64]
   Output: { mean: 38.5, median: 39 }
*/
const inputs = [12, 46, 32, 64]

const meanArray = (inputs) =>{
  mean = inputs.reduce((prev, curr)=>prev + curr)/inputs.length
  median = Math.ceil(mean)
  return {mean, median}
}

console.log(meanArray(inputs))