/* If the given input is a number, you should return the factorial of that number. 
The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
  Sample I/O:
   Input:  6
   Output: 720
*/
const input = 6;
const factorial = (integer) => {
  if (integer < 1) return;
  if (integer == 1) return 1;
  return integer * factorial(integer - 1);
}
console.log(factorial(input));