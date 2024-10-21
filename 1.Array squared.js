/* Square the value of every element in the array. Presume that you will only get numbers in the input array.
  Sample I/O:
   Input:  [1,2,3,4,5]  
   Output: [1,4,9,16,25]
*/

const inputs = [1,2,3,4,5];

const arraySum = (inputs) => {
  return inputs.map(input => input**2);
}

console.log(arraySum(inputs));
