/* If the given input is a number, you should return the factorial of that number. 
The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
  Sample I/O:
   Input:  6
   Output: 720
*/
function factorial(n) {

  if (n < 0) return undefined; 
  
  const numbers = new Array(n).fill(0).map((_, i) => i + 1);
  
  return numbers.reduce((total, value) => total * value, 1);

}

console.log(factorial(6)); // Outputs: 720