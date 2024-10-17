/* Square the value of every element in the array. Presume that you will only get numbers in the input array.
  Sample I/O:
   Input:  [1,2,3,4,5]  
   Output: [1,4,9,16,25]
*/

const inputs = [1,2,3,4,5];
var result=0;
const arraySum1=(inputs,result)=>{
  return inputs.reduce(input => result=result+input);
}
const arraySum2=(inputs)=>{
  for(const input of inputs){
    result.push(input**2)
  }
  return result;
}
console.log(arraySum1(inputs,result));
